function showTime() {
  document.querySelector('.clock').innerText = new Date().toString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0]
}

let btnStart = document.querySelector('#start')
let btnPause = document.querySelector('#pause')
let timer = null
btnStart.onclick = function(){
  timer = setInterval(showTime,1000)
}
btnPause.onclick = function(){
  clearInterval(timer)
}