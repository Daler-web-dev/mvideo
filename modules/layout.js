const layout = (place) => {
  place.innerHTML = `
        <nav class="top-nav" >
            <div class="left">
                <a href="#">
                    <img src="" alt="">
                    <span>Москва</span>
                </a>
                <a href="#">
                    <span>Магазины</span>
                </a>
                <a href="#">
                    <span>Доставка</span>
                </a>
            </div>
            <div class="right">
                <a href="#">
                    <span>Блог «М.Клик»</span>
                </a>
                <a href="#">
                    <span>M.Club</span>
                </a>
                <a href="#">
                    <span>Для бизнеса</span>
                </a>
                <a href="#">
                    <img src="" alt="">
                    <span>8-800-600-7775</span>
                </a>
            </div>
        </nav>
        <div class="main-header">
            <img class="logo" src="./public/icons/logo_red_web_fl1.svg" alt="m.video">
            <button class="def-btn">
                <img src="./public/icons/menu.svg" alt="">
                <span>
                    Каталог
                </span>
            </button>
            <form action="">
                <input type="text" placeholder="Искать скидки в Черную пятницу" >
                <button class="def-btn">
                    <img src="./public/icons/search.svg" alt="">
                </button>
            </form>
            <nav>
                <a href="">
                    <img src="./public/icons/clock.svg" alt="">
                    <span>Статус заказа</span>
                </a>
                <a href="">
                    <img src="./public/icons/user.svg" alt="">
                    <span>Войти</span>
                </a>
                <a href="">
                    <img src="./public/icons/map.svg" alt="">
                    <span>Сравнение</span>
                </a>
                <a href="">
                    <img src="./public/icons/heart.svg" alt="">
                    <span>Избранное</span>
                </a>
                <a href="">
                    <img src="./public/icons/shopping-cart.svg" alt="">
                    <span>Корзина</span>
                </a>
            </nav>
        </div>
    `;
};

layout(document.querySelector('header'))
