let products = document.querySelector('.products')
let url = "http://localhost:7777/goods"

axios.get(url)
    .then(res => {
        reload(res.data)
    })

const reload = (arr) => {
    for(let item of arr){
        let countOfRating = Math.round(item.rating)
        let discount = item.price - (item.salePercentage * item.price / 100)

        let box = document.createElement('div')
        let box_top = document.createElement('div')
        let p_of_top = document.createElement('p')
        let div_strelka = document.createElement('div')
        let img = document.createElement('img')
        let title = document.createElement('div')
        let reating = document.createElement('div')
        let reating_star = document.createElement('img')
        let reating_num = document.createElement('p')
        let reating_count = document.createElement('p')
        let price = document.createElement('div')
        let current_price = document.createElement('p')
        let old_price = document.createElement('p')
        let sth = document.createElement('img')
        let box_bot = document.createElement('div')
        let btn_bot = document.createElement('button')
        let like = document.createElement('img')
        let chart = document.createElement('img')

        box.classList.add("box")
        box_top.classList.add("box_top")
        p_of_top.classList.add("p_of_top")
        div_strelka.classList.add("div_strelka")
        img.classList.add("title-img")
        title.classList.add("title")
        reating.classList.add("reating")
        reating_star.classList.add("reating_star")
        reating_num.classList.add("reating_num")
        reating_count.classList.add("reating_count")
        price.classList.add("price")
        current_price.classList.add("current_price")
        old_price.classList.add("old_price")
        sth.classList.add("sth")
        box_bot.classList.add("box_bot")
        btn_bot.classList.add("def-btn")
        like.classList.add("like")
        chart.classList.add("chart")

        if(item.salePercentage == 0){
            old_price.style.display = 'none'
        }
        img.src = item.media[0]
    
        title.innerHTML = item.title

        reating_star.src = "./public/icons/star.svg"
        reating_num.innerHTML = item.rating
        reating_count.innerHTML = `${countOfRating} отзывов`

        current_price.innerHTML = discount + "$"
        old_price.innerHTML = item.price
        sth.src = "./public/icons/sth.png"
        btn_bot.innerHTML = `<img src="./public/icons/shopping-cart.svg">`
        like.src = "./public/icons/heart.svg"
        chart.src = "./public/icons/bar-chart-2.svg"

        reating.append(reating_star, reating_num, reating_count)
        price.append(current_price, old_price)
        box_bot.append(btn_bot, like,chart)

        box.append(img, title, reating, price, sth, box_bot)
        products.append(box)

        img.onclick = () => {
            openProduct(item)
        }
        btn_bot.onclick = () => {
            openProduct(item)
        }
    }
}

function openProduct(item) {
    window.location.assign('productid.html')
    localStorage.setItem("id", item.id)
}