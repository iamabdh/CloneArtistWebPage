let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let imagesDisplayer= document.querySelector('.images-displayer');
let imgDetail=document.querySelector('.img-detail');
let imgTitle=document.querySelector('.title')
let galImages=document.querySelector('.gal-images');
let galIn2020 = document.querySelector('.gal-2020');
let galIn2019 = document.querySelector('.gal-2019');
let galIn2020Narow = document.querySelector('.gal-2020-narow');
let galIn2019Narow = document.querySelector('.gal-2019-narow');
let menuYear2020Narow = document.querySelector('.navbar-year-2020-narow');
let menuYear2019Narow = document.querySelector('.navbar-year-2019-narow');


const getData = async ()=>{
    const res = await fetch("http://127.0.0.1:8000/data");
    let data = await res.json();
    let loadImages
    let defluat=true;
    if (defluat) {
        let index=0;
        loadImages  = data.gal2020;
        settingGal(index, loadImages);
        next.onclick = () => {index=NextGal(index, loadImages)}
        prev.onclick = () => {index=PrevGal(index, loadImages)}
        defluat=false;
        galIn2020.style.opacity='0.4';
        galIn2019.style.opacity='1';
        galIn2019Narow.style.display='none';

    }
    galIn2020.onclick=()=>{
            let index=0;
            loadImages  = data.gal2020;
            settingGal(index, loadImages);
            next.onclick = () => {index=NextGal(index, loadImages)}
            prev.onclick = () => {index=PrevGal(index, loadImages)}
            galIn2020.style.opacity='0.4';
            galIn2019.style.opacity='1';
            galIn2019Narow.style.display='none';
            galIn2020Narow.style.display='block';
    }
    galIn2019.onclick=()=>{
        let index=0;
        loadImages  = data.gal2019;
        settingGal(index, loadImages);
        next.onclick = () => {index=NextGal(index, loadImages)}
        prev.onclick = () => {index=PrevGal(index, loadImages)}
        galIn2019.style.opacity='0.4';
        galIn2020.style.opacity='1';
        galIn2020Narow.style.display='none';
        galIn2019Narow.style.display='block';
    }


}
getData();

function settingGal(index, loadImages) {
    imgTitle.innerHTML = loadImages[index].title;
    imagesDisplayer.src = loadImages[index].url;
    imgDetail.innerHTML = loadImages[index].imageSize;
}
function NextGal(index, loadImages) {
    if (index < ((loadImages.length) - 1)) {
        index=index+1
        settingGal(index, loadImages);
        console.log(index);
        return index;
    } else if (index === ((loadImages.length) - 1)) {
        index=0;
        settingGal(index, loadImages);
        console.log(index);
        return index;
    }
}
function PrevGal(index, loadImages) {
    if (index <= ((loadImages.length) - 1) && index > 0) {
        index = index - 1
        settingGal(index, loadImages);
        console.log(index);
        return index;
    } else {
        index = ((loadImages.length) - 1);
        settingGal(index, loadImages);
        console.log(index);
        return index;
    }
}
menuYear2020Narow.onclick=()=>{
    galIn2019Narow.style.display='none';
    galIn2020Narow.style.display='block';
}
menuYear2019Narow.onclick=()=>{
    galIn2019Narow.style.display='block';
    galIn2020Narow.style.display='none';
}



let clickShop = document.querySelector('.shop');
let shopTree = document.querySelector('.shop-tree');
let toggle=true;
clickShop.onclick=()=>{
    if (toggle) {
        shopTree.style.height = '5.5em';
        toggle=false;
    }
    else {
        shopTree.style.height = '0';
        toggle=true;
    }
}
let behindWebsiteClick = document.querySelector('.sidebar-copyright');
let behindWebsite = document.querySelector('.behind-website');
let toggleBehindWebsite=true;
behindWebsiteClick.onclick=()=>{
    if (toggleBehindWebsite) {
        behindWebsite.style.height = '5.5em';
        behindWebsiteClick.style.opacity='1';
        toggleBehindWebsite=false;
    }
    else {
        behindWebsite.style.height = '0';
        behindWebsiteClick.style.opacity='0.5';
        toggleBehindWebsite=true;
    }
}


let inMail =  document.querySelector('.mail');
let inInsta= document.querySelector('.insta');
let noneOfthem = document.querySelector('.siderbar-soical');

noneOfthem.addEventListener('mouseenter', e=>{
    inInsta.style.opacity='0.5';
    inMail.style.opacity='0.5';
});
inMail.addEventListener('mouseenter', e=>{
    inInsta.style.opacity='0.5';
    inMail.style.opacity='1';
});
inInsta.addEventListener('mouseenter', e=>{
    inMail.style.opacity='0.5';
    inInsta.style.opacity='1';
});
noneOfthem.addEventListener('mouseleave', e=>{
    inInsta.style.opacity='1';
    inMail.style.opacity='1';
});
let inMailNarow =  document.querySelector('.mail-narow');
let inInstaNarow= document.querySelector('.insta-narow');
let noneOfthemNarow = document.querySelector('.siderbar-soical-narow');

noneOfthemNarow.addEventListener('mouseenter', e=>{
    inInstaNarow.style.opacity='0.5';
    inMailNarow.style.opacity='0.5';
});
inMailNarow.addEventListener('mouseenter', e=>{
    inInstaNarow.style.opacity='0.5';
    inMailNarow.style.opacity='1';
});
inInstaNarow.addEventListener('mouseenter', e=>{
    inMailNarow.style.opacity='0.5';
    inInstaNarow.style.opacity='1';
});
noneOfthemNarow.addEventListener('mouseleave', e=>{
    inInstaNarow.style.opacity='1';
    inMailNarow.style.opacity='1';
});

let menu = document.querySelector('.menu');
let navBar=document.querySelector('.navbar');
let toggleMenu=true;
menu.onclick=()=>{
    if(toggleMenu){
        navBar.style.height='29em';
        toggleMenu=false;
    }
    else {
        navBar.style.height='0';
        toggleMenu=true;
    }
}


