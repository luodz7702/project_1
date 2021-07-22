function showTime() {
  document.querySelector('.clock').innerText = new Date().toString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0]
}

let btnStart = document.querySelector('#start')
let btnPause = document.querySelector('#pause')
let timer = null
let timer1 = null
let timer2 = null
btnStart.onclick = function(){
  timer = setInterval(showTime,1000)
  timer1 = new Date()
}
btnPause.onclick = function(){
  clearInterval(timer)
  timer2 = new Date()
  document.querySelector('.second').innerText = (timer2 - timer1)/1000
}
