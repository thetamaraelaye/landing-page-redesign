// Script for the spinning text

const text = document.querySelector('.spin-text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');
for(let i = 0; i < element.length; i++){
    element[i].style.transform = "rotate("+i*9+"deg)";
}
