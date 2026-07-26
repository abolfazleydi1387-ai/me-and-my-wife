
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
//=========================
// Scene 4
//=========================

const scene4 =
document.getElementById("scene4");

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

function showScene4(){

scene4.classList.add("show");

}
//========================
// Scene4 Letter
//========================

const myLetter = `

«وقتی جهان نام تو را زمزمه کرد»

قبلاً فکر می‌کردم عشق چیزی است که آدم‌ها باید دنبالش بگردند.

بعد تو را دیدم...

و فهمیدم عشق پیدا نمی‌شود.

عشق،
آرام از راه می‌رسد؛

مثل نور ماه
که بی‌صدا
از پنجره‌ای باز
وارد اتاق می‌شود...

هیچ چیزی نمی‌خواهد،

اما همه‌چیز را تغییر می‌دهد.

تو به موسیقی آرام تمام روزهای معمولی من تبدیل شدی.

اولین فکری که هر صبح با لبخند به ذهنم می‌آید.

و آخرین دعایی که قلبم پیش از خواب زمزمه می‌کند.

دنیا می‌گوید هزار کیلومتر بین ما فاصله است.

من فقط لبخند می‌زنم...

چون عددها هیچ‌وقت عشق را نفهمیده‌اند.

فاصله شاید دو شهر را از هم جدا کند،

اما هیچ‌وقت نتوانسته دو روحی را که همدیگر را انتخاب کرده‌اند،
از هم دور کند.

هر پیامت،

مثل رسیدن بهار بعد از زمستانی طولانی است.

هر "صبح بخیر" تو،

طلوعی تازه است.

هر "شب بخیر" تو،

قولی دوباره است...

که فردا هم متعلق به ما خواهد بود.

گاهی با هم فیلم می‌بینیم...

گاهی کنار هم فوتبال بازی می‌کنیم...

گاهی فقط سکوت می‌کنیم...

اما سکوت کنار تو،

از هزاران گفت‌وگوی دنیا

بلندتر است...

تو امن‌ترین جایی هستی

که قلبم تا به حال شناخته...

اگر روزی تمام ستاره‌های آسمان خاموش شوند...

باز هم می‌دانم

نور زندگی‌ام

در چشمان توست...

اگر تمام جاده‌های دنیا از بین بروند...

باز هم راهت را پیدا می‌کنم...

چون هر جاده‌ای

در نهایت

به تو ختم می‌شود...

روزی که هزار کیلومتر

در برابر سرنوشت تسلیم شود...

می‌خواهم کنار تو بنشینم...

دستت را بگیرم...

بعد از یک گل دیگر در فیفا

با هم بخندیم...

یک فیلم معمولی دیگر ببینیم...

و در دل

از جهان تشکر کنم...

که روحی را آفرید

که معنای واقعی "خانه" است.

چون عشق...

در نحوه‌ی صدا زدن اسم من نیست...

عشق...

در تپش قلب من است...

هر بار که نام تو را می‌شنوم...

نیایش ❤️

زیباترین واژه‌ی زندگی من.

معجزه‌ی آرام من.

و اگر روزی از من بپرسند

عشق چه شکلی است...

فقط لبخند می‌زنم...

دستت را می‌گیرم...

و آرام می‌گویم...

❤️

عشق...

یعنی تو.
`;

let index = 0;

function typeLetter(){

const area=document.getElementById("letterText");

if(index<myLetter.length){

area.innerHTML+=myLetter.charAt(index);

index++;

setTimeout(typeLetter,42);

}

else{

finishLetter();

}

}

envelope.addEventListener("click",()=>{

if(envelope.classList.contains("open")) return;

envelope.classList.add("open");

setTimeout(typeLetter,1200);

});
//=========================
// Scene4 Ending
//=========================

const flash =
document.getElementById("whiteFlash");

const nextBtn =
document.getElementById("nextScene5");

function roses(){

for(let i=0;i<25;i++){

const r=document.createElement("div");

r.className="rose";

r.innerHTML="🌹";

r.style.left=Math.random()*100+"vw";

r.style.animationDuration=
(5+Math.random()*4)+"s";

r.style.fontSize=
(18+Math.random()*25)+"px";

document.body.appendChild(r);

setTimeout(()=>{

r.remove();

},9000);

}

}

function finishLetter(){

roses();

nextBtn.classList.add("show");

flash.classList.add("show");

setTimeout(()=>{

flash.classList.remove("show");

},1800);

}

nextBtn.onclick=function(){

document.getElementById("scene4").style.opacity=0;

setTimeout(()=>{

document.getElementById("scene4").style.display="none";

/*

اینجا بعدا:

showScene5();

*/

},1200);

}
//=========================
// Scene 5
//=========================

const scene5=document.getElementById("scene5");

const book=document.getElementById("book");

function showScene5(){

scene4.classList.remove("show");

scene5.classList.add("show");

}

book.addEventListener("click",()=>{

book.querySelector(".cover").style.transform="rotateY(-170deg)";

});
//==========================
// Scene 7 Music
//==========================

const music=document.getElementById("loveMusic");

const musicButton=document.getElementById("musicButton");

const bars=document.querySelectorAll(".equalizer span");

let playing=false;

music.volume=0;

musicButton.onclick=()=>{

if(!playing){

music.play();

playing=true;

musicButton.innerHTML="❚❚";

bars.forEach(bar=>{

bar.style.animationPlayState="running";

});

fadeIn();

}

else{

fadeOut();

}

}

function fadeIn(){

music.volume=0;

const timer=setInterval(()=>{

if(music.volume<0.98){

music.volume+=0.02;

}

else{

clearInterval(timer);

}

},120);

}

function fadeOut(){

const timer=setInterval(()=>{

if(music.volume>0.02){

music.volume-=0.02;

}

else{

clearInterval(timer);

music.pause();

music.currentTime=0;

playing=false;

musicButton.innerHTML="▶";

bars.forEach(bar=>{

bar.style.animationPlayState="paused";

});

}

},120);

}
//========================
// Scene 8
//========================

const scene8=document.getElementById("scene8");

const rain=document.getElementById("loveRain");

const icons=[

"❤️",

"🌹",

"✨"

];

function showScene8(){

scene8.classList.add("show");

startLoveRain();

}

function startLoveRain(){

setInterval(()=>{

createLoveItem();

},140);

}

function createLoveItem(){

const item=document.createElement("div");

item.className="loveItem";

item.innerHTML=

icons[Math.floor(Math.random()*icons.length)];

item.style.left=Math.random()*100+"vw";

item.style.fontSize=

20+Math.random()*35+"px";

item.style.animationDuration=

4+Math.random()*5+"s";

rain.appendChild(item);

setTimeout(()=>{

item.remove();

},9000);

}
//==========================
// Scene 9
//==========================

const scene9 =
document.getElementById("scene9");

const title =
document.getElementById("finalTitle");

const subtitle =
document.getElementById("finalSubtitle");

function showScene9(){

scene8.classList.remove("show");

scene9.classList.add("show");

typeEnding();

}

const endingText1 =
"Abolfazl ❤️ Niayesh";

const endingText2 =
"Forever & Always";

let t1=0;
let t2=0;

function typeEnding(){

if(t1<endingText1.length){

title.innerHTML+=endingText1.charAt(t1);

t1++;

setTimeout(typeEnding,120);

}

else{

typeSubtitle();

}

}

function typeSubtitle(){

if(t2<endingText2.length){

subtitle.innerHTML+=endingText2.charAt(t2);

t2++;

setTimeout(typeSubtitle,100);

}

}
