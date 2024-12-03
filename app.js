// Generate a lot of img Nodes with a random position for each

const backgroundContainer = document.getElementsByClassName("background")[0];
let numberOfStars = randomNum(200, 300);

var stars = [];
for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement("img");
    let width = randomNum(2, 10);
    star.setAttribute("style", "--width:" + width + "px");

    let x = randomNum(0, window.screen.availWidth);
    star.style.left = x + "px";

    let y = randomNum(0, window.screen.availHeight);
    star.style.top = y + "px";

    star.classList.add("star");
    star.src = "assets/star.svg";

    stars.push(star.cloneNode());
    backgroundContainer.append(star);
}

var overlay = document.createElement("div");
overlay.id = "overlay";
for (let i = 0; i < stars.length; i++) {
    stars[i].style.setProperty("--delay", randomNum(20, 2000) + "ms")
    overlay.append(stars[i]);

}
backgroundContainer.append(overlay);

window.addEventListener("mousemove", (e) => { 
    overlay.style.setProperty("--x", e.clientX + "px")
    overlay.style.setProperty("--y", e.clientY + "px")
});

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
