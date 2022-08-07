                            /*||||||||||||||||||||||||||||||||||||||||||||
                              ||                                        ||
                              ||       Spouffy's personal library       ||
                              ||                                        ||
                              ||     Licensed under Quantum Collide     ||  
                              ||             public license             ||
                              ||                                        ||
                              ||||||||||||||||||||||||||||||||||||||||||||*/



var DeletedElements = []

const slct = (s, a) => {
    if (a){
        return document.querySelectorAll(s)
    } else {
        return document.querySelector(s)
    }
}

const getElm = (s) => {
        if (typeof s === 'object'){
            return s
        }else if (document.getElementById(s)){
            return document.getElementById(s)
        } else if (document.getElementsByClassName(s)) {
            return document.getElementsByClassName(s)
        } else if (document.getElementsByTagName(s)) {
            return document.getElementsByTagName(s)
        }
}

const on = (e, s, f) => {       // Checked, confidence: 80%
    el = getElm(s)
    if (el[0]){
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener(e, f)
        }
    } else if (el){
        el.addEventListener(e, f)
    }
}

const crtElm = (tag, parent) => { // Checked, confidence: 100%
    var e=document.createElement(tag)
    getElm(parent).append(e)
    return e
}

const clnElm = (n) => {
    var e = getElm(n)
    var l=e.length
    if(e[0]){
        for (let i = 0; i < l; i++) {
            var ec = e[i].cloneNode(true);
            e[0].parentElement.append(ec)
        }
    } else if (e) {
        var ec = e.cloneNode(true)
        e.parentElement.append(ec)
    }
}

const hide = (e) => {
    getElm(e).style.display = 'none'
}
const show = (e, dis) => {
    getElm(e).style.display = dis || 'block'
}

const del = (s) => {
    var e = getElm(s)
    if(e[0]){
        for (let i = 0; i < e.length; i++) {
            DeletedElements.push(e[i])
            e[i].remove()
        }
    } else if(e){
        DeletedElements.push(e)
        e.remove()
    getElm(parent).append(document.createElement(tag))
}
}

const revive = () => {

}