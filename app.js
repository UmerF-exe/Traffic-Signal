var car = document.getElementById("car");

var count = 5;
var leftSpace = 0;
function accelerate(){
    count +=50;
    car.style.left = count + "px";
    console.log(count);
    if(count > 1050){
        brake();
    }
}

var ref = setInterval(accelerate, 200);

// setTimeout(setInterval(accelerate, 200), 1000);
function brake(){
    clearInterval(ref);
    count = 0;
    accelerate();
}