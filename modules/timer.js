const deadline = "2022-12-31 23:59"

const getReaminingTime = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000 ) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}
const showTime = (selector, endTime) => {
    const t = document.querySelector(selector),
        day = t.querySelector('#day'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        updater = setInterval(updateTime, 1000)

    function updateTime() {
        const time = getReaminingTime(endTime)
        day.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
    }
    
}


showTime('.timers', deadline)