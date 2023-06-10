const showNav = document.querySelector(".showNav");
const show = document.querySelector(".show");
const showNav1 = document.querySelector(".showNav1");
const show1 = document.querySelector(".show1")


show.addEventListener('click', function(e){
    e.preventDefault()
    showNav.classList.toggle('hidden')
    
})

show1.addEventListener('click', function(e){
    e.preventDefault()
    showNav1.classList.toggle('hidden')
    
})

