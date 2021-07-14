//计时器

//showTime获取当前时间，使用正则匹配 对应的内容 00:00:00
//document.queryselector('.clock')   => 选中 clock 类选择器
//document.queryselector('.clock').innerText   =>  修改 里面的文本
function showTime(){
  document.querySelector('.clock').innerText = new Date().toString().match(/\d{2}:\d{2}:\d{2}/)[0]
}
//选中开始按钮
let btnStart = document.querySelector('#start')

//选中结束按钮
let btnPause = document.querySelector('#pause')

//设置计时器初始值
let timer = null

//开始按钮 监听
btnStart.onclick = function(){
  timer = setInterval(()=> {
    showTime()
  },1000)
}

//结束按钮监听
btnPause.onclick = function(){
  clearInterval(timer)
}