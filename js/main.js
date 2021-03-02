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