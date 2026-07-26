
const startBtn =
document.getElementById("startBtn");


startBtn.addEventListener(
"click",
()=>{


    startBtn.innerHTML =
    "Loading ❤️";


    setTimeout(()=>{


        alert(
        "Scene 2 Coming Soon..."
        );


    },1000);



});

const scene1 =
document.getElementById("scene1");


const scene2 =
document.getElementById("scene2");



startBtn.addEventListener(
"click",
()=>{


scene1.style.display="none";


scene2.style.display="flex";


});



const heart =
document.querySelector(".heart");


heart.addEventListener(
"click",
()=>{


heart.innerHTML="💖";


heart.style.animation="none";


alert(
"Niayesh ❤️"
);



});
/* =========================
   Scene 3 Logic
========================= */

function showScene3(){

  // مخفی کردن سکانس ۲
  const scene2 = document.getElementById('scene2');
  if(scene2) scene2.classList.add('hidden');

  // نمایش سکانس ۳
  const scene3 = document.getElementById('scene3');
  scene3.classList.remove('hidden');

  // ساخت ذرات نور
  createParticles();

  // ساخت قلب‌های شناور
  createFloatingHearts();
}

/* particles */
function createParticles(){
  const container = document.getElementById('particles');
  container.innerHTML = '';

  for(let i=0;i<70;i++){
    const p = document.createElement('span');

    p.style.left = Math.random()*100 + '%';
    p.style.width = p.style.height = (Math.random()*4 + 2) + 'px';
    p.style.animationDuration = (Math.random()*10 + 8) + 's';
    p.style.animationDelay = Math.random()*8 + 's';
    p.style.opacity = Math.random();

    container.appendChild(p);
  }
}

/* hearts */
function createFloatingHearts(){
  const container = document.getElementById('floatingHearts');
  container.innerHTML = '';

  for(let i=0;i<24;i++){
    const h = document.createElement('span');

    h.innerHTML = '❤';
    h.style.left = Math.random()*100 + '%';
    h.style.fontSize = (Math.random()*18 + 14) + 'px';
    h.style.animationDuration = (Math.random()*8 + 8) + 's';
    h.style.animationDelay = Math.random()*6 + 's';

    container.appendChild(h);
  }
}

/* دکمه رفتن به سکانس ۴ */
document.getElementById('toScene4')?.addEventListener('click', () => {
  alert('Scene 4 will be added next 💌');
});
