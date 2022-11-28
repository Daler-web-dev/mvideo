let url = "http://localhost:7777/goods";

axios.get(url).then((res) => reload(res.data));

let tv = document.querySelector('.tv')

function reload(arr) {
  for (let item of arr) {
    // long blocks//////////

    let long_blocks = document.createElement("div");
    /////
    let left = document.createElement("div");
    let btn_ch = document.createElement("button");
    let back_img = document.createElement("img");
    //////
    let centre = document.createElement("div");
    let name_tovara = document.createElement("div");
    let h5 = document.createElement("h5");
    let otziv = document.createElement("div");
    let star = document.createElement("img");
    let ball = document.createElement("div");
    let kol_otziv = document.createElement("div");
    let diogonal = document.createElement("p");
    let diog_info = document.createElement("p");
    let processor = document.createElement("p");
    let proces_info = document.createElement("p");
    let operativka = document.createElement("p");
    let oper_info = document.createElement("p");
    let vkarta = document.createElement("p");
    let vkarta_info = document.createElement("p");
    let obyom = document.createElement("p");
    let obyom_info = document.createElement("p");
    ////
    let right = document.createElement("div");
    let pprice = document.createElement("p");
    let price_sale = document.createElement("p");
    let bonuss = document.createElement("p");
    let bonuss_img = document.createElement("img");
    let a = document.createElement("a");
    let bon = document.createElement("p");
    let click = document.createElement("div");
    let click_btn = document.createElement("button");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");

    ////// bbb
    long_blocks.classList.add("long_blocks");
    ///// leftt
    left.classList.add("left");
    btn_ch.classList.add("btn_ch");
    btn_ch.innerHTML = "черная пятница";
    back_img.classList.add("back_img");
    back_img.src = item.media[0];
    ///// centre
    centre.classList.add("centre");
    name_tovara.classList.add("name_tovara");
    h5.classList.add("h5");
    h5.innerHTML = item.title;
    h5 = h5.innerHTML.slice(0, 37);
    otziv.classList.add("otziv");
    star.classList.add("star");
    // star.src = '../public/star\ \(2\).svg'
    ball.classList.add("ball");
    ball.innerHTML = item.rating;
    kol_otziv.classList.add("kol_otziv");
    kol_otziv.innerHTML = `${28} отзывов`;
    diogonal.classList.add("diogonal");
    diog_info.classList.add("diog_info");
    diogonal.innerHTML = "Диагональ/разрешение";
    diog_info.innerHTML = '15.6"/1920x1080 пикс';
    processor.classList.add("processor");
    proces_info.classList.add("proces_info");
    processor.innerHTML = "Процессор";
    proces_info.innerHTML = "Intel Core i5 1135G7 2.4 ГГц";
    operativka.classList.add("operativka");
    oper_info.classList.add("oper_info");
    operativka.innerHTML = "Оперативная память (RAM)";
    oper_info.innerHTML = "12 ГБ";
    vkarta.classList.add("vkarta");
    vkarta_info.classList.add("vkarta_info");
    vkarta.innerHTML = "Графический контроллер";
    vkarta_info.innerHTML = "GeForce GTX 1650 4GB";
    obyom.classList.add("obyom");
    obyom_info.classList.add("obyom_info");
    obyom.innerHTML = "Объем SSD";
    obyom_info.innerHTML = "1256 ГБ";
    ////right
    right.classList.add("right");
    price_sale;
    pprice.classList.add("price");
    price_sale.classList.add("price_sale");
    pprice.innerHTML = item.price;
    let ddd = (item.price / 100) * item.salePercentage + item.price;
    price_sale.innerHTML = ddd;
    bonuss.classList.add("bonuss");
    bonuss_img.classList.add("img");
    // bonuss_img.src = "./public/activity.svg";
    a.classList.add("a");
    a.innerHTML = "+544";
    bon.classList.add("p");
    bon.innerHTML = "Бонусных рублей";

    click.classList.add("clicks");
    click_btn.classList.add("button");
    click_btn.innerHTML = "В корзину";
    img1.classList.add("img");
    // img1.src = './public/heart_gray.svg'
    img2.classList.add("img");
    // img2.src = './public/bar.svg'

    // /ccccc//////
    left.append(btn_ch, back_img);
    otziv.append(star, ball, kol_otziv);
    diogonal.append(diog_info);
    processor.append(proces_info);
    operativka.append(oper_info);
    vkarta.append(vkarta_info);
    obyom.append(obyom_info);
    centre.append(
      name_tovara,
      h5,
      otziv,
      diogonal,
      processor,
      operativka,
      vkarta,
      obyom
    );
    bonuss.append(bonuss_img, a, bon);
    click.append(click_btn, img1, img2);
    right.append( bonuss, click);
    long_blocks.append(left, centre, right);
    tv.append(long_blocks);
  }
}
