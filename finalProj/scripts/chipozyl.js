const slideshow = document.getElementById("images");
const caption = document.getElementById("caption");



let pic1 = new food("Vegan", "images/pic1.jpg", "Vegan Options are Available");
let pic2 = new food("Kid Bowl", "images/pic2.jpg", "Best for kids... or adults");
let pic3 = new food("Burrito", "images/pic3.jpg", "Soooooo GOOOD");

let pictures = [];
pictures.push(pic1);
pictures.push(pic2);
pictures.push(pic3);
let index = 0;

document.addEventListener("keydown", movePic);
document.getElementById("left").addEventListener("click", movePicL);
document.getElementById("right").addEventListener("click", movePicR);

function movePic(e){
    if(index==3){index = 0;}
    if(index==-1){index=2;}
    if(e.code == "ArrowRight"){
        slideshow.src = pictures[index].pic;
        caption.textContent = pictures[index].text;
        index++;
    }
    else if(e.code =="ArrowLeft"){
        slideshow.src = pictures[index].pic;
        caption.textContent = pictures[index].text;
        index--;
    }
}

function movePicL(e){
    if(index==-1){
        index=2;
    }
    slideshow.src = pictures[index].pic;
    caption.textContent = pictures[index].text;
    index--;
}

function movePicR(){
    if(index==3){index = 0;}
    slideshow.src = pictures[index].pic;
    caption.textContent = pictures[index].text;
    index++;
    
}