var ctx

window.addEventListener('load', function (event) {
  console.log('load emmited')
  var canvas = document.getElementById('paint')
  ctx = canvas.getContext('2d')

  paint(15, 15)
})

function paint (x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 5, 0, 2 * Math.PI, true);
  ctx.fill()
}

