let products = document.querySelector(".products");
let blackProductsPalce = document.querySelector(".blackProducts");
let hightRatProducts = document.querySelector(".hightRatProducts");
let hightPriceProducts = document.querySelector(".hightPriceProducts");
let url = "http://localhost:7777/goods";



let toCartId = JSON.parse(localStorage.getItem('liked')) || []

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

    let tv = document.querySelector('.tv')


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
        if(toCartId.includes(item.id)) {
          toCartId = toCartId.filter(el => el !== item.id)
          localStorage.setItem('liked', JSON.stringify(toCartId))
        } else {
          toCartId.push(item.id)
          localStorage.setItem('liked', JSON.stringify(toCartId))
        }
    }

    
    // long blocks//////////

    let long_blocks = document.createElement('div')
    /////
    let left = document.createElement('div')
    let btn_ch = document.createElement('button')
    let back_img = document.createElement('img')
    //////
    let centre = document.createElement('div')
    let name_tovara = document.createElement('div')
    let h5 = document.createElement('h5')
    let otziv = document.createElement('div')
    let star = document.createElement('img')
    let ball = document.createElement('div')
    let kol_otziv = document.createElement('div')
    let diogonal = document.createElement('p')
    let diog_info = document.createElement('p')
    let processor = document.createElement('p')
    let proces_info = document.createElement('p')
    let operativka = document.createElement('p')
    let oper_info = document.createElement('p')
    let vkarta = document.createElement('p')
    let vkarta_info = document.createElement('p')
    let obyom = document.createElement('p')
    let obyom_info = document.createElement('p')
    ////
    let right = document.createElement('div')
    let pprice = document.createElement('p')
    let price_sale = document.createElement('p')
    let bonuss = document.createElement('p')
    let bonuss_img = document.createElement('img')
    let a = document.createElement('a')
    let bon = document.createElement('p')
    let click = document.createElement('div')
    let click_btn = document.createElement('button')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')






    ////// bbb
    long_blocks.classList.add('long_blocks')
    ///// leftt 
    left.classList.add('left')
    btn_ch.classList.add('btn_ch')
    btn_ch.innerHTML = 'черная пятница'
    back_img.classList.add('back_img')
    back_img.src = item.media[0]
    ///// centre
    centre.classList.add('centre')
    name_tovara.classList.add('name_tovara')
    h5.classList.add('h5')
    h5.innerHTML = item.title
    h5 = h5.innerHTML.slice(0, 37)
    otziv.classList.add('otziv')
    star.classList.add('star')
    // star.src = '../public/star\ \(2\).svg'
    ball.classList.add('ball')
    ball.innerHTML = item.rating
    kol_otziv.classList.add('kol_otziv')
    kol_otziv.innerHTML = `${countOfRating} отзывов`
    diogonal.classList.add('diogonal')
    diog_info.classList.add('diog_info')
    diogonal.innerHTML = 'Диагональ/разрешение'
    diog_info.innerHTML = '15.6"/1920x1080 пикс'
    processor.classList.add('processor')
    proces_info.classList.add('proces_info')
    processor.innerHTML = 'Процессор'
    proces_info.innerHTML = 'Intel Core i5 1135G7 2.4 ГГц'
    operativka.classList.add('operativka')
    oper_info.classList.add('oper_info')
    operativka.innerHTML = 'Оперативная память (RAM)'
    oper_info.innerHTML = '12 ГБ'
    vkarta.classList.add('vkarta')
    vkarta_info.classList.add('vkarta_info')
    vkarta.innerHTML = 'Графический контроллер'
    vkarta_info.innerHTML = 'GeForce GTX 1650 4GB'
    obyom.classList.add('obyom')
    obyom_info.classList.add('obyom_info')
    obyom.innerHTML = 'Объем SSD'
    obyom_info.innerHTML = '1256 ГБ'
    ////right
    right.classList.add('right')
    price
    price_sale
    pprice.classList.add('price')
    price_sale.classList.add('price_sale')
    pprice.innerHTML = item.price
    let ddd = (item.price / 100 * item.salePercentage) + item.price
    price_sale.innerHTML = ddd
    bonuss.classList.add('bonuss')
    bonuss_img.classList.add('img')
    // bonuss_img.src = "./public/activity.svg";
    a.classList.add('a')
    a.innerHTML = '+544'
    bon.classList.add('p')
    bon.innerHTML = 'Бонусных рублей'

    click.classList.add('clicks')
    click_btn.classList.add('button')
    click_btn.innerHTML = 'В корзину'
    img1.classList.add('img')
    // img1.src = './public/heart_gray.svg'
    img2.classList.add('img')
    // img2.src = './public/bar.svg'






    // /ccccc//////
    left.append(btn_ch, back_img)
    otziv.append(star, ball, kol_otziv)
    diogonal.append(diog_info)
    processor.append(proces_info)
    operativka.append(oper_info)
    vkarta.append(vkarta_info)
    obyom.append(obyom_info)
    centre.append(name_tovara, h5, otziv, diogonal, processor, operativka, vkarta, obyom)
    price.append(price_sale)
    bonuss.append(bonuss_img, a, bon)
    click.append(click_btn , img1 , img2)
    right.append(price, bonuss , click)
    long_blocks.append(left, centre, right)
    tv.append(long_blocks)



   

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