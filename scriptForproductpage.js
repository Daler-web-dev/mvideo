let id = localStorage.getItem("id")
let url = "http://localhost:7777/goods"

let title = document.querySelector('.title')
let productImg = document.querySelector('.productImg')


axios.get(url+"/"+id)
    .then(res => reloadforProduct(res.data))



function reloadforProduct(arr) {
    title.innerHTML = arr.title

    productImg.src = arr.media[0]

}
