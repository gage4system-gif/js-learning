const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
  const firstChild =ulElement.firstElementChild;
  firstChild.style.backgroundColor = "purple";
})
const element =document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor ="blue"


ulElements.forEach(ulElement =>{
    const lastChild =ulElement.lastElementChild;
    lastChild.style.backgroundColor ="yellow"
})
const element2=document.getElementById("blueberries");
const nextSibling2 =element.nextElementSibling;
nextSibling2.style.backgroundColor ="yellow"


const element3 =document.getElmentById("gelato");
const prevSibling =element3.previousElementSibling;
prevSibling.style.backgroundColor ="yellow";



const element4 =document.getElementById("gelato");
const parent =element4.parentElement.parentElement;
parent.style.backgroundColor ="blue"


const element5 = document.getElementById("fruits");
const children =element.children;
console.log(children)