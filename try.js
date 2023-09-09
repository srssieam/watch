const hour = document.querySelector('.hour');
console.log(hour)
const minute= document.querySelector('.minute');
const second = document.querySelector('.second');

const set_clock = setInterval(()=>{
    const dateNow = new Date();
    const hr = dateNow.getHours();
    const min = dateNow.getMinutes();
    const sec = dateNow.getSeconds();

    const calcHr= (hr*30) + (min/2);
    console.log(calcHr)
    const calcMin= (min * 6);
    console.log(calcMin)
    const calcSec= (sec * 6);

    hour.style.transform = `rotate(${calcHr}deg)`;
    minute.style.transform = `rotate(${calcMin}deg)`;
    second.style.transform = `rotate(${calcSec}deg)`;
}, 1000)