console.log('Welcome to the console :)')

const body = slct('#bod')
var hert

on('click', body, (e) => {
  hert = crtElm('img', 'bod')
  console.log(hert);
  hert.src = 'src/assets/heart.png'
  hert.className = 'hearts'
  hert.style.top = (e.y-25)+'px'
  hert.style.left = (e.x-25)+'px'
})
