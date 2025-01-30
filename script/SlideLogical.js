const SlideCont = document.getElementById("SlideCont");
const press = document.getElementById("press");
const next = document.getElementById("next");
const num_item = document.getElementById("num_item");

const WidthScreen = window.screen.width;

let left = 0;
let NumCard = 1;
const min_left = (WidthScreen <= 425)?-855:-570;
const max_num = (WidthScreen <= 425)?4:3;

console.log("StartSlideApp");

window.addEventListener("DOMContentLoaded",function(){
    num_item.innerText = `${NumCard} из ${max_num}`;
});

press.onclick = (e) =>{
    if(left < 0){
        left += 285;
        SlideCont.style.left = `${left}px`;
        NumCard-=1;
        num_item.innerText = `${NumCard} из ${max_num}`;
    }
    else{
        left = min_left;
        SlideCont.style.left = `${left}px`;
        NumCard = max_num;
        num_item.innerText = `${NumCard} из ${max_num}`;
    }
}
next.onclick = (e) =>{
    if(left > min_left){
        left -= 285;
        SlideCont.style.left = `${left}px`;
        NumCard+=1;
        num_item.innerText = `${NumCard} из ${max_num}`;
    }
    else{
        left = 0;
        SlideCont.style.left = `${left}px`;
        NumCard = 1;
        num_item.innerText = `${NumCard} из ${max_num}`;
    }
}