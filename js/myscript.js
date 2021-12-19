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
    <div class="immagine-grande" id="item-${i}">
        <img src= "${items[i]}">
    
    </div>
    `
}

let contenitore = document.querySelector ('.immagine-grande');
contenitore.innerHTML= immaginiGrandi;


let immaginiPiccole = document.querySelector ('.immagine-piccola');
    
for(let i=0; i < items.length; i++){
    immaginiPiccole += `
    <div class="immagine-piccola id="item-${i}">
        <img src= "${items[i]}">
    </div>
    `
}


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
    if(elementActive-items.length-1){
        elementActive++;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
}
});
