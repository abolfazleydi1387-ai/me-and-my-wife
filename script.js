
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
