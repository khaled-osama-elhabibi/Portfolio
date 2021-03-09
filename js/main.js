let header = document.getElementById('section-header') ;
let projects = document.getElementById('section-projects') ;
let about = document.getElementById('section-about') ;
let contact = document.getElementById('section-contact') ;
/**
 * adding the navigation btns to all sections
 */
header.append(createNavBtn('About me','right','top','background-main')) ;
header.append(createNavBtn('Projects','right','middle','background-main')) ;
header.append(createNavBtn('Contact','right','bottom','background-main')) ;

projects.append(createNavBtn('About me','right','top','background-side-section')) ;
projects.append(createNavBtn('Contact','right','bottom','background-side-section')) ;

about.append(createNavBtn('Projects','right','top','background-side-section')) ;
about.append(createNavBtn('Contact','right','bottom','background-side-section')) ;

contact.append(createNavBtn('About me','right','top','background-side-section')) ; 
contact.append(createNavBtn('Projects','right','bottom','background-side-section'))
/*-----------------------------------------------------------------------------------*/
let btns =  Object.values(document.getElementsByClassName('section-navigation-btn')) ;

btns.filter((element)=> element.outerText === "About me").forEach(element => {
    element.addEventListener('click',()=>{
        about.style.zIndex = '10';
        header.style.zIndex='1';
        projects.style.zIndex='1';
        contact.style.zIndex='1';
        
        about.style.left = '0px';
        if(projects.style.left == '0px' ){
            projects.style.left = '-100vw';
            setTimeout(() => {
                projects.style.left = '100vw';
            }, 1010);
        }        
        if(contact.style.left == '0px' ){
            contact.style.left = '-100vw';
            setTimeout(() => {
                contact.style.left = '100vw';
            }, 1010);
        }        
        if(header.style.left == '0px') {
            header.style.left = '-100vw';
        }
    })         
});
btns.filter((Element)=> Element.outerText === "Projects").forEach(element => {
    element.addEventListener('click',()=>{
        projects.style.zIndex = '10';
        header.style.zIndex='1';
        about.style.zIndex='1';
        contact.style.zIndex='1';
        
        projects.style.left = '0px';
        if(about.style.left == '0px' ){
            about.style.left = '-100vw';
            setTimeout(() => {
                about.style.left = '100vw';
            }, 1000);
        }        
        if(contact.style.left == '0px' ){
            contact.style.left = '-100vw';
            setTimeout(() => {
                contact.style.left = '100vw';
            }, 1000);
        }        
        if(header.style.left == '0px') {
            header.style.left = '-100vw';
        }
    }) 
});
btns.filter((Element)=> Element.outerText === "Contact").forEach(element => {
    element.addEventListener('click',()=>{
        contact.style.zIndex = '10';
        header.style.zIndex='1';
        about.style.zIndex='1';
        projects.style.zIndex='1';
        
        contact.style.left = '0px';
        if(about.style.left == '0px' ){
            about.style.left = '-100vw';
            setTimeout(() => {
                about.style.left = '100vw';
            }, 1010);
        }        
        if(projects.style.left == '0px' ){
            projects.style.left = '-100vw';
            setTimeout(() => {
                projects.style.left = '100vw';
            }, 1010);
        }        
        if(header.style.left == '0px') {
            header.style.left = '-100vw';
        }
    })  
});
/*
function showHeader(){
    projects.style.left = '100vw';
    header.style.left = '0';
}
/*---------------------------------------------------------------------*/
/*
    adding the "slide from right" mechanism to the projects section
*/



let projectsBtn = document.getElementsByClassName('project-btn') ;
let aboutBtn = document.getElementsByClassName('about-btn') ;
let formBtn = document.getElementsByClassName('form-btn') ;

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
/**
 *  adding the "Side-Scroll" mechanism of the Projects list
 * 
*/
let sectionProjects = document.getElementById('section-projects');
let projs = new Projects(document.getElementsByClassName('projects__card'));

let btnRight = document.getElementById('project-navigation-btn--right');
btnRight.classList.add('visible')
let btnLeft = document.getElementById('project-navigation-btn--left');
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
/*-------------------------------------------------------------------------*/
/**
 * adding the skills__tech list to the html file
 * 
 */
let skillsContainer = document.getElementById('skills-container') ;
let skillsTech = new SkillsList('skills__tech') ;
skillsTech.addSkillItem('HTML' , 9);
skillsTech.addSkillItem('Cascading Style Sheets (CSS)' , 8);
skillsTech.addSkillItem('JavaScript' , 9);
skillsTech.addSkillItem('CSS preprocessor (Sass)' , 8);
skillsTech.addSkillItem('React.JS' , 5);
skillsTech.addSkillItem('version control (Git)' , 7);

skillsContainer.appendChild(skillsTech.mainList);

let skillsSoft = new SkillsList('skills__soft') ;
skillsSoft.addSkillItem('Communication' , 0);
skillsSoft.addSkillItem('teamwork' , 0);
skillsSoft.addSkillItem('critical thinking' , 0);
skillsSoft.addSkillItem('proactive' , 0);
skillsSoft.addSkillItem('hard working' , 0);
skillsSoft.addSkillItem('quick learning' , 0);

skillsContainer.appendChild(skillsSoft.mainList);






