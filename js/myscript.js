const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let contatore=0;
let immaginiGrandi = document.querySelector('.immagini-grandi');

for(let i=0; i < items.length; i++){
    immaginiGrandi.innerHTML += `
    <div class="immagine-grande img-grande ${i}">
        <img src= "${items[i]}">
    
    </div>
    `
}

let immaginiPiccole = document.querySelector('.immagini-piccole');

for(let i=0; i < items.length; i++){
    immaginiPiccole.innerHTML += `
    <div class="immagine-piccola">
        <img src= "${items[i]}"></div>
    `
}

const up = document.querySelector('.up')
const down = document.querySelector('.down')

up.addEventListener('click',function(){
    const previousImg = document.querySelector(`.immagini-piccole` + contatore);
    previousImg.classList.remove(`active`);


    if(contatore == (items.length - 1)){
        contatore = 0
    }else {
        contatore++
    }

    const currentImg = document.querySelector(`.immagini-piccole` + contatore);
    currentImg.classList.add(`active`);

    console.log(contatore) 
});

down.addEventListener('click',function(){
    const previousImg = document.querySelector(`.immagini-piccole` + contatore);
    previousImg.classList.remove(`active`);

    if(contatore == 0){
        contatore = (items.length - 1)
    }else {
        contatore--
    }

    const currentImg = document.querySelector(`.immagini-piccole` + contatore);
    currentImg.classList.add(`active`);

    console.log(contatore)
});