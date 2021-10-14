// console.log("script OK");

document.getElementById("title").textContent = "Hello World";

var p = document.getElementsByClassName('text');
var container = document.getElementById("text-container").childNodes;

console.log(container);

for (let i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(){
        this.remove()
    })
}