let products = document.querySelector(".products");
let blackProductsPalce = document.querySelector(".blackProducts");
let hightRatProducts = document.querySelector(".hightRatProducts");
let hightPriceProducts = document.querySelector(".hightPriceProducts");
let url = "http://localhost:7777/goods";



let toCartId = []

axios.get(url)
    .then((res) => {
        blackProducts = res.data.filter(item => item.isBlackFriday == true)
        reload(blackProducts.slice(1, 8), blackProductsPalce, '#333333')
        hifhprProducts = res.data.filter(item => item.type == "kitchen")
        reload(hifhprProducts.slice(1, 8), hightPriceProducts, 'red')
        hightratingProducts = res.data.filter(item => item.rating >= 4.5 && item.type == "audio")
        reload(hightratingProducts.slice(1, 8), hightRatProducts, 'red')
        forzadrot = res.data.filter(item => item.type == "PC")
        reload(forzadrot.slice(1, 8), products, 'red');
    });

    let forzadrot = []
    let blackProducts = []
    let hifhprProducts = []
    let hightratingProducts = []

const reload = (arr, place, colorr) => {
  for (let item of arr) {
    let countOfRating = Math.round(item.rating);
    let discount = item.price - (item.salePercentage * item.price) / 100;

    let box = document.createElement("div");
    let box_top = document.createElement("div");
    let p_of_top = document.createElement("p");
    let div_strelka = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("div");
    let reating = document.createElement("div");
    let reating_star = document.createElement("img");
    let reating_num = document.createElement("p");
    let reating_count = document.createElement("p");
    let price = document.createElement("div");
    let current_price = document.createElement("p");
    let old_price = document.createElement("p");
    let sth = document.createElement("img");
    let box_bot = document.createElement("div");
    let btn_bot = document.createElement("button");
    let like = document.createElement("img");
    let chart = document.createElement("img");

    box.classList.add("box");
    box_top.classList.add("box_top");
    p_of_top.classList.add("p_of_top");
    div_strelka.classList.add("div_strelka");
    img.classList.add("title-img");
    title.classList.add("title");
    reating.classList.add("reating");
    reating_star.classList.add("reating_star");
    reating_num.classList.add("reating_num");
    reating_count.classList.add("reating_count");
    price.classList.add("price");
    current_price.classList.add("current_price");
    old_price.classList.add("old_price");
    sth.classList.add("sth");
    box_bot.classList.add("box_bot");
    btn_bot.classList.add("def-btn");
    like.classList.add("like");
    chart.classList.add("chart");

    if (item.salePercentage == 0) {
      old_price.style.display = "none";
    }
    img.src = item.media[0];

    title.innerHTML = item.title;

    btn_bot.style.background = colorr

    reating_star.src = "./public/icons/star.svg";
    reating_num.innerHTML = item.rating;
    reating_count.innerHTML = `${countOfRating} отзывов`;

    current_price.innerHTML = Math.round(discount) + "$";
    old_price.innerHTML = Math.round(item.price);
    sth.src = "./public/icons/sth.png";
    btn_bot.innerHTML = `<img src="./public/icons/shopping-cart.svg">`;
    like.src = "./public/icons/heart.svg";
    chart.src = "./public/icons/bar-chart-2.svg";

    reating.append(reating_star, reating_num, reating_count);
    price.append(current_price, old_price);
    box_bot.append(btn_bot, like, chart);

    box.append(img, title, reating, price, sth, box_bot);
    place.append(box);

    img.onclick = () => {
      openProduct(item);
    };
    title.onclick = () => {
      openProduct(item);
    };

    btn_bot.onclick = () => {
        toCartId.push(item.id)
        console.log(toCartId);
    }
  }
};


function openProduct(item) {
  window.location.assign("productid.html");
  localStorage.setItem("id", item.id);
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperTwo = new Swiper(".mainSwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});