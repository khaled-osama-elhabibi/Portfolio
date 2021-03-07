/*---------------------------------------------------------------------*/
/*
    adding the "Shown/Hidden" effect of the connect list
*/
[
    document.getElementById( 'connect-list__btn' ) ,
    document.getElementById('connect-list')
]
.forEach(element => {
    let connect = document.getElementById( 'connect' );
    element.addEventListener('mouseover' , ()=>{
        connect.classList.remove('position-hidden');
        connect.classList.add('position-shown');   
    })
    element.addEventListener('mouseleave' , ()=>{
        connect.classList.remove('position-shown');   
        connect.classList.add('position-hidden');
    })           
});

/*---------------------------------------------------------------------*/
/*
    adding the "Side-Scroll" mechanism of the Projects list
*/
let sectionProjects = document.getElementById('section-projects');
let projs = new Projects(document.getElementsByClassName('projects__card'));

let btnRight = document.getElementById('btn-right');
btnRight.classList.add('visible')
let btnLeft = document.getElementById('btn-left');
btnLeft.classList.add('hidden')

btnRight.addEventListener('click',()=>{
    projs.moveRight(btnRight,btnLeft);
})
btnLeft.addEventListener('click',()=>{
    projs.moveLeft(btnRight,btnLeft);
})

document.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowRight'){
        projs.moveRight(btnRight,btnLeft);
    }
    else if(e.code === 'ArrowLeft'){
        projs.moveLeft(btnRight,btnLeft);
    }
    
})
/*---------------------------------------------------------------------*/
/*
    adding the "slide from right" mechanism to the projects section
*/
let header = document.getElementById('section-header') ;
let projects = document.getElementById('section-projects') ;
let about = document.getElementById('section-about') ;

let projectsBtn = document.getElementById('project-btn') ;
let aboutBtn = document.getElementById('about-btn') ;
let formBtn = document.getElementById('form-btn') ;


aboutBtn.addEventListener('click',()=>{
    header.style.left = '-100vw';
    about.style.left = '0';
})


projectsBtn.addEventListener('click',()=>{
    header.style.left = '-100vw';
    projects.style.left = '0';
})



function showHeader(){
    projects.style.left = '100vw';
    header.style.left = '0';
}
