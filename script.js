
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
