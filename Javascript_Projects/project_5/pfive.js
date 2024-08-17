
//setup a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() *16)] 
    }
    return color;
}

let changeColor,a1,startButton,stopButton;
//whenever we click start button, bg color is changed
a1=function(){
    document.body.style.backgroundColor=randomColor();
}
//setting interval since we need to change color continuously
startButton = function(){
     changeColor=setInterval(a1,1000);
}
//on-click, bg color will change continuously after 1 second
document.querySelector("#start").addEventListener('click',startButton);
//clearing the inrerval here
stopButton = function(){
    clearInterval(changeColor);
    changeColor=null;
}

document.querySelector("#stop").addEventListener('click',stopButton);
