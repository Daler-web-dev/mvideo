let url = "http://localhost:7777/goods"
axios.get(url) 
    .then(res => {
        console.log(res);
        reload(res.data)
        reload2(res.data)
    })
    let container = document.querySelector('.grid')
    let grid = document.querySelector('.grid2')
    function reload(arr) {
        for(let item of arr) {
            let items = document.createElement('div')
            let top = document.createElement('div')
            let bottom = document.createElement('div')
            let img = document.createElement('img')
            let left = document.createElement('div')
            let btn = document.createElement('button')
            let title = document.createElement('p')
            let old = document.createElement('p')
            let sale = document.createElement('p')
        
            items.classList.add('item')
            top.classList.add('top')
            bottom.classList.add('bottom')
            img.classList.add('img')
            img.src = item.media[0]
            left.classList.add('left')
            btn.classList.add('btn')
            btn.innerHTML = "Подробнее"
            title.classList.add('title')
            title.innerHTML = item.title
            old.classList.add('oldprice')
            old.innerHTML = `${item.price} ₽`
            sale.classList.add('saleprice')
            sale.innerHTML = `${Math.ceil(item.price * item.salePercentage / 100)} ₽`
        
            if(item.isBlackFriday === true) {
                container.append(items)
            items.append(top, bottom)
            top.append(title, img)
            bottom.append(left, btn)
            left.append(old,sale)
            }
        }
    }
    let filter = []
    function reload2(arr) {
        arr.forEach(item => {
            if(item.isBlackFriday === true) {
                filter.push(item)
            }
        });
        for(let item of filter.slice(8)) {
            let items = document.createElement('div')
            let top = document.createElement('div')
            let bottom = document.createElement('div')
            let img = document.createElement('img')
            let left = document.createElement('div')
            let btn = document.createElement('button')
            let title = document.createElement('p')
            let old = document.createElement('p')
            let sale = document.createElement('p')
        
            items.classList.add('items')
            top.classList.add('top')
            bottom.classList.add('bottom')
            img.classList.add('img')
            img.src = item.media[0]
            left.classList.add('left')
            btn.classList.add('btn')
            btn.innerHTML = "Подробнее"
            title.classList.add('title')
            title.innerHTML = item.title
            old.classList.add('oldprice')
            old.innerHTML = `${item.price} ₽`
            sale.classList.add('saleprice')
            sale.innerHTML = `${Math.ceil(item.price * item.salePercentage / 100)} ₽`
        
            if(item.isBlackFriday === true) {
                grid.append(items)
            items.append(top, bottom)
            top.append(title, img)
            bottom.append(left, btn)
            left.append(old,sale)
            }
        }
    }
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });