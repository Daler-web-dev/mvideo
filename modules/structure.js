let schema = {
    id: 1,
    title: '',
    description: "",
    colors: ['blue', 'black'],
    rating: 5.6,
    price: 6999,
    isBlackFriday: false,
    salePercentage: 46,
    media: ['url', 'url', 'url'],
    type: 'PC'

}


let pcArr = [
    {
        id: 1,
        title: 'Системный блок игровой HYPERPC Concept 5',
        description: "Необычная форма HyperPC Concept 5 говорит сама за себя – перед тобой не просто системный блок, а настоящая машина, способная запускать любые игры без тормозов. Продвинутая начинка позволяет насладиться главными хитами сезона и выставить максимальные настройки. НА ТОП-УРОВНЕ Компьютер от HyperPC использует восьмиядерный процессор Intel Core i7 11700KF и 16 Гб оперативной памяти, чего с лихвой",
        colors: ['black'],
        rating: 4.7,
        price: 391999,
        isBlackFriday: false,
        salePercentage: 46,
        media: ['https://img.mvideo.ru/Big/30058106bb.jpg', 'https://img.mvideo.ru/Big/30058106bb1.jpg', 'https://img.mvideo.ru/Big/30058106bb3.jpg'],
        type:'PC'
    
    },
    {
        id: 2,
        title: 'Системный блок игровой Raskat STRIKE 920 105611 (i9-12900F/32GB/2TB+2TB/RTX3090Ti/W10)',
        description: "Системный блок Raskat Strike 920 на операционной системе Windows 10 основан на материнской плате, совместимой с процессором Intel Core i9 12900F с рабочей тактовой частотой 2,4 ГГц. Дискретная видеокарта GeForce RTX 3090Ti с объемом памяти GDDR6Х 24 Гб открывает доступ к требовательным играм и графическим приложениям, оперативная память Ram 32 Гб, накопители SSD объемом 2 Тб и HDD емкостью 2 Тб",
        colors: ['black'],
        rating: 5.0,
        price: 359999,
        isBlackFriday: true,
        salePercentage: 10,
        media: ['https://img.mvideo.ru/Big/30065113bb.jpg', 'https://img.mvideo.ru/Big/30065113bb1.jpg', 'https://img.mvideo.ru/Big/30065113bb2.jpg'],
        type:'PC'
    },
    {
        id: 3,
        title: 'Системный блок игровой ASUS ROG Strix G15CE-1170KF0770',
        description: "Игровой системный блок Asus ROG Strix G15CE-1170KF0770 весит 11 кг. Его размеры — 49,8 х 18,5 х 42,1 см. Есть внешняя подсветка. В нем установлены шестиядерный процессор Intel Core i5 11400F, дискретная видеокарта Nvidia GeForce RTX 3080 и блок питания пиковой мощностью 700 Вт. Объем оперативной памяти — 16 Гб, ее можно расширить до 64 Гб. Емкость SSD-накопителя — 1 Тб. Поддерживаются технологии",
        colors: ['black'],
        rating: 4.8,
        price: 263499,
        isBlackFriday: false,
        salePercentage: 0,
        media: ['https://img.mvideo.ru/Big/30062852bb.jpg'],
        type: 'PC'
    
    },
    {
        id: 4,
        title: 'Системный блок игровой Raskat STRIKE720 105608 (i7-12700F/32G/1T+2T/3080TI/W10)',
        description: "Системный блок Raskat Strike 720 на операционной системе Windows 10 основан на материнской плате, совместимой с процессором Intel Core i7 12700F с рабочей тактовой частотой 2,1 ГГц. Дискретная видеокарта GeForce RTX 3080TI с объемом памяти GDDR6Х 8 Гб открывает доступ к требовательным играм и графическим приложениям, оперативная память Ram 32 Гб, накопители SSD объемом 1 Тб и HDD емкостью 2 Тб",
        colors: ['black'],
        rating: 5.0,
        price: 212999,
        isBlackFriday: false,
        salePercentage: 0,
        media: ['https://img.mvideo.ru/Big/30065111bb.jpg', 'https://img.mvideo.ru/Big/30065111bb1.jpg', 'https://img.mvideo.ru/Big/30065111bb2.jpg'],
        type: 'PC'
    
    },
    {
        id: 5,
        title: 'Видеокарта GIGABYTE RTX3090 GAMING OC-24G + монитор AORUS FV43U-EK',
        description: "Комплект, в состав которого входят видеокарта Gigabyte RTX3090 Gaming OC-24G и монитор Aorus FV43U-EK, создан для требовательного геймера.",
        colors: ['black'],
        rating: 5.0,
        price: 269999,
        isBlackFriday: false,
        salePercentage: 0,
        media: ['https://img.mvideo.ru/Big/30058010bb.jpg', 'https://img.mvideo.ru/Big/30058010bb1.jpg', 'https://img.mvideo.ru/Big/30058010bb2.jpg'],
        type: 'PC'
    
    },
    {
        id: 6,
        title: 'Видеокарта Palit RTX3080Ti GameRock 12GB',
        description: "Видеокарта Palit RTX3080Ti GameRock 12GB создана для требовательных геймеров, которые хотят получить новый игровой опыт. Она обеспечивает не только виртуальные приключения с максимальными настройками графики, но и стабильный стриминг, а также позволяет обрабатывать изображения на профессиональном уровне. БЕЗ ПАДЕНИЯ ПРОИЗВОДИТЕЛЬНОСТИ Литые рельефные пластины",
        colors: ['black'],
        rating: 5.0,
        price: 219999,
        isBlackFriday: true,
        salePercentage: 12,
        media: ['https://img.mvideo.ru/Big/30057855bb.jpg', 'https://img.mvideo.ru/Big/30057855bb5.jpg', 'https://img.mvideo.ru/Big/30057855bb4.jpg'],
        type: 'PC'
    
    },
    {
        id: 7,
        title: 'Монитор игровой HP OMEN X Emperium 65',
        description: "По сравнению с монитором HP Omen X Emperium 65 его собратья смотрятся крошечными. Гигантский девайс позволит тебе в полной мере оценить виртуальные красоты и сможет заменить телевизор в комнате. Чтобы добиться максимального качества картинки, игровому компьютеру придётся изрядно напрячь начинку. С ЦАРСКИМ РАЗМАХОМ HP Omen X Emperium 65 относится к классу Big Format Gaming",
        colors: ['black'],
        rating: 5.6,
        price: 59999,
        isBlackFriday: false,
        salePercentage: 0,
        media: ['https://img.mvideo.ru/Big/30043369bb.jpg', 'https://img.mvideo.ru/Big/30043369bb1.jpg', 'https://img.mvideo.ru/Big/30043369bb4.jpg'],
        type: 'PC'
    
    },
    {
        id: 8,
        title: 'Монитор игровой Samsung Odyssey G5 (LS27AG502NIXCI)',
        description: "Монитор игровой Samsung Odyssey G5 работает на базе IPS-матрицы с частотой обновления 165 Гц и откликом пикселя 1 мс. Он дополнен динамической контрастностью Mega Infinity DCR. Его яркость — 350 кд/м². Такая конфигурация обеспечивает детализированное изображение с плавной анимацией. Габариты — 57,1 х 61,4 х 24,7 см. Экран диагональю 27\" транслирует с разрешением 2560 x 1440 пикс.",
        colors: ['blue'],
        rating: 5.0,
        price: 4999,
        isBlackFriday: true,
        salePercentage: 15,
        media: ['https://img.mvideo.ru/Big/30063814bb.jpg', 'https://img.mvideo.ru/Big/30063814bb1.jpg', 'https://img.mvideo.ru/Big/30063814bb2.jpg'],
        type: 'PC'
    
    },
    {
        id: 9,
        title: 'Монитор игровой Acer Predator Z35',
        description: "Монитор Acer Predator Z35 с изогнутым экраном – настоящая находка для опытных геймеров и киберспортсменов. Высокое качество изображения и широкие возможности для регулировки экрана значительно повышают шансы владельца на победу в игре. МАКСИМУМ УДОБСТВА Монитор оснащён эргономичной подставкой, позволяющей поднимать экран, наклонять его, поворачивать так, как удобно владельцу",
        colors: ['black'],
        rating: 4.2,
        price: 76499,
        isBlackFriday: false,
        salePercentage: 0,
        media: ['https://img.mvideo.ru/Big/30026741bb.jpg', 'https://img.mvideo.ru/Big/30026741bb1.jpg', 'https://img.mvideo.ru/Big/30026741bb7.jpg'],
        type: 'PC'
    
    },
    {
        id: 10,
        title: 'Монитор игровой Samsung C27RG50FQI',
        description: "Игровой монитор Samsung C27RG50FQI в черном корпусе оснащен изогнутым дисплеем диагональю 27 дюймов и соотношением сторон 16:9. Матрица VA обеспечивает углы обзора в двух плоскостях до 178° и степень яркости 3000:1. Изображение транслируется в качестве Full HD, на дисплее есть матовое покрытие. Устройство снабжено двумя выходами HDMI и одним DisplayPort, есть разъемы для",
        colors: ['black'],
        rating: 4.7,
        price: 23999,
        isBlackFriday: true,
        salePercentage: 8,
        media: ['https://img.mvideo.ru/Pdb/30064600b.jpg', 'https://img.mvideo.ru/Pdb/30064600b1.jpg'],
        type: 'PC'
    
    }
]