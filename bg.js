const body = document.querySelector("body");

const IMG_NUM = 5;

function handelImgLoad(){
    console.log(Finished);
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM) + 1;
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();