var sec=0
var min=0
var interval

function start () {
    interval= setInterval(counter,1000)
}

function stop () {
    clearInterval(interval)
    document.getElementById('counter').innerText='00:00'

}

function counter () {
    sec++
    if(sec==60){
        min++
        sec=0
}
    if(min==1){
        clearInterval(interval)
        document.getElementById("congrats").hidden = false
        document.getElementById("start").hidden = true
    }


    document.getElementById('counter').innerText=min+':'+sec
}
