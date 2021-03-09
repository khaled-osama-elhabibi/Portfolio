function createNavBtn(sectionName , btnPositionX , btnPositionY , btnBackground) {
    let navBtn = document.createElement('div');
    navBtn.classList = 
    `
        section-navigation-btn
        section-navigation-btn--${btnBackground}
        section-navigation-btn--${btnPositionX} 
        section-navigation-btn--${btnPositionY}
    `;
    if(btnPositionX === 'left'){
        navBtn.innerHTML = `<span class = 'arrow arrow--${btnBackground} arrow--${btnPositionX}'></span> ${sectionName}` ;
    }
    else {
        navBtn.innerHTML = `${sectionName} <span class = 'arrow arrow--${btnBackground} arrow--${btnPositionX}'></span>` ;
    }
    return navBtn;    
}