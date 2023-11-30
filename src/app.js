let bloodSugar = 1
let liverContent = 0
let normalSugarRange = [0.65, 1.1]

var bloodSugarDis = µ('#bloodsugar')

function addSugar (e) {
    bloodSugar = bloodSugar + e
    if (bloodSugar > normalSugarRange[1]) {
        console.log('Start USING sugar');
    } else if (true) {

    }
    log(`Adding sugar : ${e}g/l \n Current sugar : ${bloodSugar}g/l`)

}

function useSugar(e) {
    bloodSugar = bloodSugar - e
    if (bloodSugar < normalSugarRange[0]) {
        console.log('Start STOCKING sugar');
    } else if (true) {
        
    }
    log(`Using sugar : ${e}g/l \n Current sugar : ${bloodSugar}g/l`)
}


setInterval(spawnGlu, 5000)

function spawnGlu () {
    var g = new Elm('div', µ('#glu-container').elm)
    g.className = 'glu'
    var s = µ(g).crtElm('span');
    g.style.width = Math.floor(Math.random()*20) +'px'
    g.style.height = Math.floor(Math.random()*35) +'px'
    console.log(s);
}