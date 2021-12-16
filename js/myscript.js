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
let immaginiGrandi = document.querySelector ('.immagine-grande');
    
for(let i=0; i < items.length; i++){
    immaginiGrandi.innerHTML += `
    <div class="immagine-grande${i}">
        <img src= "${items[i]}">
    
    </div>
    `
}

let immaginiPiccole = document.querySelector ('.immagine-piccola');
    
for(let i=0; i < items.length; i++){
    immaginiPiccole.innerHTML += `
    <div class="immagine-piccola${i}">
        <img src= "${items[i]}">
    </div>
    `
}

const up = document.querySelector('.up')
const down = document.querySelector('.down')

up.addEventListener('click',function(){
    const previousImg = document.querySelector(`.immagine-grande` + contatore);
    previousImg.classList.remove(`active`);

    if(contatore == (items.length - 1)){
        contatore = 0
    }else {
        contatore++
    }

    const immagineCorrente = document.querySelector(`.immagine-grande` + contatore);
    immagineCorrente.classList.add(`active`);

    console.log(contatore) 
});

down.addEventListener('click',function(){
    const previousImg = document.querySelector(`.immagine-grande` + contatore);
    previousImg.classList.remove(`active`);

    if(contatore == 0){
        contatore = (items.length - 1)
    }else {
        contatore--
    }

    const immagineCorrente = document.querySelector(`.immagine-grande` + contatore);
    immagineCorrente.classList.add(`active`);

    console.log(contatore);
});

const primaImg = document.querySelector(`.immagine-grande-0`);
primaImg.classList.add(`active`);