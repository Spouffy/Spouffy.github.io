let bloodSugar = 10
let liverContent = 0
let range = {max: 11, min: 7}

let isWorking = false;

const animationTime = 5
const bloodSugarDis = µ('#bloodsugar')

function addSugar (e) {
    bloodSugar = bloodSugar + e
    updateSugarDisplay()
}

function useSugar(e) {
    bloodSugar = bloodSugar - e
    updateSugarDisplay()
    if (bloodSugar < range.min) {
        console.log('Start STOCKING sugar');
    } else if (true) {
        
    }
}

// func that spawn a glucagen element and removes it after the animation time has passed 
function spawnGlu () {
    var g = new Elm('div', µ('#glu-container').elm)
    g.className = 'glu'
    var s = µ(g).crtElm('span');
    g.style.width = Math.floor(Math.random()*20) +'px'
    g.style.height = Math.floor(Math.random()*35) +'px'


    setTimeout(() => {
        ++bloodSugar
        updateSugarDisplay()
        g.remove()
    }, animationTime*1000);
}

function spawnIns() {
    var g = new Elm('div', µ('#ins-container').elm)
    g.className = 'ins'
    var s = µ(g).crtElm('span');
    g.style.width = Math.floor(Math.random()*20) +'px'
    g.style.height = Math.floor(Math.random()*35) +'px'

    setTimeout(() => {
        --bloodSugar
        updateSugarDisplay()
        g.remove()
    }, animationTime*1000);
}

// func that update the sugar blood display 
function updateSugarDisplay () {
    bloodSugarDis.elm.innerText = bloodSugar/10
}

updateSugarDisplay()


// Interval that checks if the sugar is low or high and act accordingly
var checker = setInterval(e => {
    if (isWorking) {
        return
    }
    if (bloodSugar > range.max && !isWorking) {
        console.log('Sugar is high : ', bloodSugar);
        isWorking = true

        spawnIns()
        isWorking = false;

    }
    if (bloodSugar < range.min && !isWorking) {
        console.log('Sugar is low : ', bloodSugar);
        isWorking = true
        
        spawnGlu()
        isWorking = false;

    }
    if (bloodSugar >= range.min && bloodSugar <= range.max) {
        console.log('Range is normal : ', bloodSugar);
        isWorking = false;

    } 

    bloodSugar > range.max ? bloodSugarDis.elm.style.backgroundColor = "red" : null
    bloodSugar < range.min ? bloodSugarDis.elm.style.backgroundColor = "red" : null
    bloodSugar >= range.min && bloodSugar <= range.max ? bloodSugarDis.elm.style.backgroundColor = "white" : null
}, 200)