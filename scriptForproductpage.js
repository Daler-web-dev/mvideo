let id = localStorage.getItem("id");
let url = "http://localhost:7777/goods";

let title = document.querySelector(".title");
let productImg = document.querySelector(".productImg");
let priceTobuy = document.querySelector(".priceTobuy");
let bnt_to_cart = document.querySelector(".toCart");

let toCartId = JSON.parse(localStorage.getItem("liked")) || [];

axios.get(url + "/" + id).then((res) => reloadforProduct(res.data));

function reloadforProduct(arr) {
  title.innerHTML = arr.title;

  productImg.src = arr.media[0];

  if ((arr.salePercentage = 0)) {
    priceTobuy.innerHTML = arr.price;
  } else {
    let discount = arr.price - (arr.salePercentage * arr.price) / 100;
    priceTobuy.innerHTML = Math.round(discount);
  }

  bnt_to_cart.onclick = () => {
    if (toCartId.includes(arr.id)) {
      toCartId = toCartId.filter((el) => el !== arr.id);
      localStorage.setItem("liked", JSON.stringify(toCartId));
    } else {
      toCartId.push(arr.id);
      localStorage.setItem("liked", JSON.stringify(toCartId));
    }
    console.log(toCartId);
  };
}
