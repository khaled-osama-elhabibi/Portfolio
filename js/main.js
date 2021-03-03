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
let projs = new Projects(document.getElementsByClassName('project__card'));

document.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowRight'){
        projs.moveRight();
    }
    else if(e.code === 'ArrowLeft'){
        projs.moveLeft();
    }
    
})
/*---------------------------------------------------------------------*/
