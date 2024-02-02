const toggleBtn=document.querySelector('.toggle')
const toggleBtnIcon=document.querySelector('.toggle i')
const dropdownMenu=document.querySelector('.dropdown')

toggleBtn.onclick=function(){
    dropdownMenu.classList.toggle('open')
}