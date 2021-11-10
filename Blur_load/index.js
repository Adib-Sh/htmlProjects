const loadText = document.querySelector('.loading-text')
const bl = document.querySelector('.bl')
const welcome = document.querySelector('.welcome')

let load = 0;
let wload = 0
let blurinterval = setInterval(blurring, 40)
let welcomeinterval = setInterval(wblurring, 10)

function blurring() {
    load += 1
    if (load > 99){
        clearInterval(blurinterval)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function wblurring() {

    if (load == 100){
        wload +=1
        if (wload > 99){
            learInterval(welcomeinterval)
        }
        welcome.style.opacity = scale(wload, 0, 100, 0, 1);
        welcome.style.fontSize = `${scale(wload, 0, 100, 50, 80)}px`;
    }
}



const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
