let navDropDown= document.querySelector('.laptop-max')
let menuToggle= document.querySelector('.menu-toggle')
let isDropMenu=false
menuToggle.addEventListener('click',()=>{
    toggleMenu()
})
function toggleMenu(){
    if(!isDropMenu){
        navDropDown.style.transform='translateX(0%)';
        isDropMenu=true;
        menuToggle.innerHTML=`<img src="icons/Multiply.png" alt="">`
        
    }
    else{
        navDropDown.style.transform='translateX(120%)'
        isDropMenu=false;
        menuToggle.innerHTML=`<img src="icons/Menu.png" alt="">`
    }
}
