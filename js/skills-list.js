class SkillsList{
    constructor(listClass){
        this.mainList = document.createElement('ul');
        this.mainList.classList.add('skills',`${listClass}`)
    }
    addSkillItem(SkillName , profDegree){
        let item = document.createElement('div');
        item.classList.add('skills__item');
        item.innerHTML =`<li class="skills__item-name">${SkillName}</li> `;
       
        if(profDegree > 0){
            item.innerHTML += 
            `
            <div class="skills__item-ind">
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
                <div class="skills__item-ind-unit">  </div>
            </div>       
            `;
            for( let i = 0 ; i < profDegree ; i++ ){
                item.children[1].children[i].innerHTML = ` <div class=" skills__item-ind-unit-fill "></div> ` ; 
            }
        }
        this.mainList.append(item);
    }
}

`

<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
<div class="skills__item-ind-unit-fill"></div>
`