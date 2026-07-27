const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});


window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.style.boxShadow=window.scrollY>50
?"0 3px 10px rgba(0,0,0,.3)"
:"none";

});