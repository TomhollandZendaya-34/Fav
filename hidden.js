const message="If you asked me 6 months before obsessed over a girl is good i would say hell no !! But the beauty of time is it changes and it changed me too now I'm happily obsessed over my asa kothamalli ❤️ and I was nice to be in this shoes and thanks for giving me the privilege and coming to my life!!இந்த இதயத்தையும் மனதும் பத்திரமாகவும் நிம்மதியாகவும் தாஜ் ரீனாவிடம் மட்டும் தான் இருக்கும் 🤍.";

const typing=document.getElementById("typing");

const sub=document.getElementById("subText");

const btn=document.getElementById("continueBtn");

let index=0;

function type(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(type,70);

}else{

sub.innerHTML="Every memory in this little gift will always remain special. ❤️";

btn.style.display="inline-block";

}

}

type();

btn.onclick=()=>{

window.location.href="feedback.html";

};
