let pbtm = document.querySelector("#pbtm");
let timer = 6;
let score = 0;
let hitrn = 0;
function increasescore () {
    score += 10 ;  
    document.querySelector("#scoreval").textContent=score
}
function getnewhit(){
  hitrn =  Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent= hitrn ;

}
function makeBubble(){
    let clutter= "";

    for(let i = 1 ; i<=160 ; i++){
    let rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
    
    
    };
    
    pbtm.innerHTML= clutter 

}

function runtime(){

let timerint = setInterval(() => {
     if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent= timer;
     }
     else{
        clearInterval(timerint);
        pbtm.innerHTML = `<h1>GAME OVER 😵 </h1>`;
     }
}, 1000);
}
pbtm.addEventListener("click",function(details){
     let clickednum = Number(details.target.textContent);
     if(clickednum === hitrn){
        increasescore();
        makeBubble();
        getnewhit();
    }
})
makeBubble();
runtime();
getnewhit();
increasescore();



