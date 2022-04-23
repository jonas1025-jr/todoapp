let inputfield = document.getElementById("inputfield");
let addtask = document.getElementById("addtask");
let todotask = document.getElementById("tasks");

addtask.addEventListener('click',function(){
var text = document.createElement("p");
text.innerText = inputfield.value;
todotask.appendChild(text)
inputfield.value = "";
text.addEventListener('click',function(){
text.style.textDecoration = "line-through";
})
text.addEventListener('dblclick',function(){
todotask.removeChild(text);
})
}) 