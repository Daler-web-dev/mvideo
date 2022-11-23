let id = localStorage.getItem("id")
let url = "http://localhost:7777/goods"

let title = document.querySelector('.title')
let productImg = document.querySelector('.productImg') 
let priceTobuy = document.querySelector('.priceTobuy')

axios.get(url+"/"+id)
    .then(res => reloadforProduct(res.data))



function reloadforProduct(arr) {
    title.innerHTML = arr.title

    productImg.src = arr.media[0]

    if (arr.salePercentage = 0) {
        priceTobuy.innerHTML = arr.price
    } else {
        let discount = arr.price - (arr.salePercentage * arr.price / 100)
        priceTobuy.innerHTML = Math.round(discount)

    }

    
}
