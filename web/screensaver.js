const {ipcRenderer} = require('electron');
const  videos = require("../videos.json").assets;

function quitApp() {
    ipcRenderer.send('quitApp');
}

//quit when a key is pressed
/*document.addEventListener('keydown', quitApp);
document.addEventListener('mousedown', quitApp);
setTimeout(function () {
    var threshold = 5;
    document.addEventListener('mousemove', function (e) {
        if (threshold * threshold < e.movementX * e.movementX
            + e.movementY * e.movementY) {
            quitApp();
        }
    });
}, 1500);*/

//Clock
const tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function GetClock() {
    let d = new Date();
    let nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();
    let nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();
    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "";
}
GetClock();
setInterval(GetClock, 1000);

function randomInt(min, max){
    return Math.floor(Math.random() * max) - min;
}

document.getElementById("video").src = videos[randomInt(0,videos.length)]["url-1080-H264"];