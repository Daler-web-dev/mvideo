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

let first_box = document.querySelector('.first-box')
let second_box = document.querySelector('.second-box')
let third_box = document.querySelector('.third-box')
let fourth_box = document.querySelector('.fourth-box')
let fifth_box = document.querySelector('.fifth-box')


let first_arr = ["Каталог", "Частые вопросы", "Акции и скидки", "M.Club – кэшбек и Бонусные рубли", "Доставка", "Обмен и возврат", "М.Сервис – ремонт, страховка", "Кредит и рассрочка", "Заберите товар через 15 минут после заказа", "Гарантия лучшей цены", "Публичная оферта", "Безопасность в Интернете"]
let second_arr = [ "Техника для вашей компании", "Тендеры", "Поставщикам", "Арендуем помещения под магазины", "Электронный документооборот"]
let third_arr = [ "Про М.Видео", "Пресс-центр", "Благотворительный фонд", "Экологические инициативы", "Партнёрская программа", "Инвесторам и акционерам", "Политика компании"]
let fourth_arr = [ "Как установить «Сбербанк Онлайн» и приложения других банков на iPhone", "Как сделать, чтобы вещи в шкафу приятно пахли", "Когда будет Черная пятница в 2022 году", "Тестируем iPhone 14 Pro Max: эволюция с элементами революции", "Слушают ли нас гаджеты: комментарии эксперта", "Топ-12 товаров со скидками: что купить на Черной пятнице", "Классическая шарлотка с яблоками: пошаговый рецепт от профессионального повара", "Чем iPhone 14 отличается от iPhone 13? Сравниваем обычные и Pro-версии", "Как настроить цифровые каналы на телевизоре"]
let last_arr = [ "КОНТАКТЫ", "Канал Viber", "Telegram"]


function footerReaload (arr, place) {
    for(let item of arr){
        let link = document.createElement("a")
        link.href = "https://www.mvideo.ru/"
        link.innerHTML = item

        place.append(link)
    }
}
footerReaload(first_arr, first_box)
footerReaload(second_arr, second_box)
footerReaload(third_arr, third_box)
footerReaload(fourth_arr, fourth_box)
footerReaload(last_arr, fifth_box)