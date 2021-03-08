class Projects {
    constructor(projs){
        this.projs = projs;
        for(let i = 0 ; i < projs.length ; i++ )
        {
            if(i===0) this.projs[i].classList.add('projects__card--main');
            else if (i===1) this.projs[i].classList.add('projects__card--right');
            else this.projs[i].classList.add('projects__card--right-out');
        } 
    }
    moveRight(btnRight,btnLeft){
        let indexOfNextCard = this.projs.length - this.numOfCardsRightOut() ;

        if(indexOfNextCard < this.projs.length) 
        {
            this.projs[indexOfNextCard].classList.replace('projects__card--right-out','projects__card--right');
        }        
        this.projs[indexOfNextCard-1].classList.replace('projects__card--right','projects__card--main');
        this.projs[indexOfNextCard-2].classList.replace('projects__card--main','projects__card--left');
        if(indexOfNextCard-3 >= 0) 
        {
            this.projs[indexOfNextCard-3].classList.replace('projects__card--left','projects__card--left-out');
        }

        if(this.numOfCardsRightOut() === 0) btnRight.classList.replace( 'visible' , 'hidden' );
        if(this.numOfCardsLeftOut() > 0) btnLeft.classList.replace(  'hidden' , 'visible' );
    }
    numOfCardsRightOut(){
        let i = (this.projs.length - 1);
        while(this.projs[i].classList.contains('projects__card--right-out')==true) {i--;}
        return ((this.projs.length -1) - i);
    }
    moveLeft(btnRight,btnLeft){
        let indexOfNextCard = this.numOfCardsLeftOut() - 1;
        if(indexOfNextCard >= 0)
        {
            this.projs[indexOfNextCard].classList.replace('projects__card--left-out','projects__card--left');
        }
        this.projs[indexOfNextCard+1].classList.replace('projects__card--left','projects__card--main');
        this.projs[indexOfNextCard+2].classList.replace('projects__card--main','projects__card--right');
        if(indexOfNextCard+3 < this.projs.length)
        {
            this.projs[indexOfNextCard+3].classList.replace('projects__card--right','projects__card--right-out');
        }
        
        if(this.numOfCardsLeftOut() === 0) btnLeft.classList.replace( 'visible' , 'hidden');
        if(this.numOfCardsRightOut() > 0) btnRight.classList.replace( 'hidden', 'visible' );

    }
    numOfCardsLeftOut(){
        let i = 0;
        while(this.projs[i].classList.contains('projects__card--left-out')==true) {i++;}
        return i;
    }
}