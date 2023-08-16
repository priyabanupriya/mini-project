const box = document.querySelector('.box');
const container= document.querySelector('.container');
const head= document.querySelector('#head');
const form= document.querySelector('#form');
const man= document.querySelector('#man');


container.addEventListener("mousemove" , (e)=>{
     
     let horizontal = (window.innerWidth / 2  - e.pageX) / 20;
     let vertical = (window.innerHeight / 2  - e.pageY) / 20;
     box.style.transform = `rotateX(${vertical}deg) rotateY(${horizontal}deg)`;

});

container.addEventListener("mouseenter" ,(e)=>{
    box.style.transition = ".1s";
    head.style.transform = "translateZ(120px)";
    man.style.transform = "translateZ(150px)";
    form.style.transform = "translateZ(130px)";
});


container.addEventListener("mouseleave" ,(e)=>{
    box.style.transition = ".1s";
    box.style.transform = "rotateY(0deg) rotateX(0deg)";
    head.style.transform = "translateZ(0px)";
    man.style.transform = "translateZ(0px)";
    form.style.transform = "translateZ(0px)";
});