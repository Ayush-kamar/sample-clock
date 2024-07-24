const clock = document.getElementById('clock')


setInterval(function(){
    let Currdate = new Date()   
clock.innerHTML =  Currdate.toLocaleTimeString()
}, 1000)