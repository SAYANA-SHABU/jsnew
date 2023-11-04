var head = document.getElementById('head1');
head.style.color='red';
var hd = document.getElementById('head2');
hd.style.color='green';
//  head.setAttribute("hidden",true);
head.innerText="changed"
 var td = document.getElementById("text");
 td.innerHTML=`<h1> I have created a h1 tag</h1>`
 var tp=document.getElementsByClassName('cont');
 console.log(tp);
 tp[0].style.color="blue";
//  querySelector
 var q=document.querySelector(".list");
 q.style.backgroundColor="gold";
 var fc=document.getElementsByTagName('li');
 fc[0].style.color="red";
 fc[1].style.color="white";
// Events
var btn=document.getElementById("val")
function popup() {
// alert("button clicked");
btn.style.color="purple"}
var ao= document.getElementById("at");
ao.addEventListener("click",function display(){
    alert("evenlistener works")
})
var em= document.getElementById("email");
function show() {
    em.style.backgroundColor="lightgreen"}
var name= document.getElementById("name");
function capval(e) {
    console.log(e.target.value);
}
var head4=document.getElementById("head4")
function changeColor() {
    head4.style.color="blue";
}
function backColor() {
    head4.style.color="red";
}