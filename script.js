// console.log("script OK");

document.getElementById("title").textContent = "Hello World";

var p = document.getElementsByClassName('text');
var container = document.getElementById("text-container").childNodes;

// console.log(container);

for (let i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(){
        this.remove()
    })
};

var button = document.getElementById('btn');
button.addEventListener('click', function(){
    var p = document.createElement('p');
    document.getElementById("text-container").appendChild(p);
    p.className = "text";
    p.textContent = document.getElementById('input').value;
    p.addEventListener('click', function(){
        this.remove()
    })
})