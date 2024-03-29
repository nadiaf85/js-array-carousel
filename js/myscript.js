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

let elementActive=0;
let immaginiGrandi = '';

for(let i=0; i < items.length; i++){
    immaginiGrandi += `
    <div class="grande item" id="item-${i}">
        <img src= "${items[i]}">
        <div class="text">
            <h1>${title[i]}</h1>
            <h2 >${text[i]}</h2>
        </div>
    </div>
    `
}

let contenitore = document.querySelector ('.immagine-grande');
contenitore.innerHTML= immaginiGrandi;




let immagini = '';
for(let i=0; i < items.length; i++){
    immagini += 
    `<div class="piccola" >
        <img class="pic" id="item-${i}" src= "${items[i]}">
    </div>
    `
}
immagini += `
    <div class="up"><i class="fas fa-chevron-up"></i></div>
    <div class="down"><i class="fas fa-chevron-down"></i></div>
`
let sideImg = document.querySelector ('.immagine-piccola');
sideImg.innerHTML= immagini;


let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');



const up = document.querySelector('.up')
const down = document.querySelector('.down')

up.addEventListener('click',function(){
    if(elementActive !=0){
        elementActive--;
        itemActive.classList.remove('active');
        itemActive=document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
    }
});

     
down.addEventListener('click',function(){
    if(elementActive<items.length-1){
        elementActive++;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
}
});
