const body = document.getElementsByTagName("body")[0]; //will return an array >>> [#] = first element in body array

function setColour(name) {
    body.style.backgroundColor = name;

}

function randomColour() {
    const red = Math.round(Math.random() * 255); //these 3 const are rounded number values
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const colour = `rgb(${red}, ${green}, ${blue})` //uses back ticks (top-left on keyboard), NOT single quotation marks --- rounded num bvalues are embedded into the royGbiv 
    body.style.backgroundColor = colour;
}

let green=document.getElementById("green")
green.addEventListener("click",function() {
    setColour("green");
})

let red=document.getElementById("red")
red.addEventListener("click",function() {
    setColour("red");
})

let blue=document.getElementById("blue")
blue.addEventListener("click",function() {
    setColour("blue");
})

let random=document.getElementById("random")
random.addEventListener("click",function() {
    randomColour("random");
})


