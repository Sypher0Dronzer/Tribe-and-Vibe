let distName=''
let distNameDiv=document.querySelector('.districtName')
window.addEventListener('mouseover',(e)=>{
    distName=e.target.parentElement.dataset.district;
    if(distName!=undefined){

        distNameDiv.innerHTML=distName
    }
    else{
        distNameDiv.innerHTML=''
    }

console.log(e.target.parentElement.dataset.district);
})
