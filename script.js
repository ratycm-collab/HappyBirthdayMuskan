const text="Happy Birthday Dr. Muskan ❤️";

let i=0;

function type(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

function startWebsite(){

document.querySelector(".hero").style.display="none";

document.getElementById("content").style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.opacity=.7;

heart.style.transition="5s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="100vh";

},100);

setTimeout(()=>{

heart.remove();

},5000);

},400);
