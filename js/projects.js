class Projects {
    constructor(projs){
        this.projs = projs;
        for(let i = 0 ; i < projs.length ; i++ )
        {
            if(i===0) this.projs[i].classList.add('position-main');
            else if (i===1) this.projs[i].classList.add('position-right');
            else this.projs[i].classList.add('position-right-out');
        }
    }
    moveLeft(){
        let indexOfNextCard = this.projs.length - this.numOfCardsRightOut() ;

        if(indexOfNextCard < this.projs.length) 
        {
            this.projs[indexOfNextCard].classList.replace('position-right-out','position-right');
        }        
        this.projs[indexOfNextCard-1].classList.replace('position-right','position-main');
        this.projs[indexOfNextCard-2].classList.replace('position-main','position-left');
        if(indexOfNextCard-3 >= 0) 
        {
            this.projs[indexOfNextCard-3].classList.replace('position-left','position-left-out');
        }
    }
    numOfCardsRightOut(){
        let i = (this.projs.length - 1);
        while(this.projs[i].classList.contains('position-right-out')==true) {i--;}
        return ((this.projs.length -1) - i);
    }
    moveRight(){
        let indexOfNextCard = this.numOfCardsLeftOut() - 1;
        if(indexOfNextCard >= 0)
        {
            this.projs[indexOfNextCard].classList.replace('position-left-out','position-left');
        }
        this.projs[indexOfNextCard+1].classList.replace('position-left','position-main');
        this.projs[indexOfNextCard+2].classList.replace('position-main','position-right');
        if(indexOfNextCard+3 < this.projs.length)
        {
            this.projs[indexOfNextCard+3].classList.replace('position-right','position-right-out');
        }
    }
    numOfCardsLeftOut(){
        let i = 0;
        while(this.projs[i].classList.contains('position-left-out')==true) {i++;}
        return i;
    }
}