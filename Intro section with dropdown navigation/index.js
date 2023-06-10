const showNav = document.querySelector(".showNav");
const show = document.querySelector(".show");
const showNav1 = document.querySelector(".showNav1");
const show1 = document.querySelector(".show1")
const navshw = document.querySelector(".navshw")
const hamClick = document.querySelector(".hamClick")
const cross = document.getElementById('cross');



show.addEventListener('click', function(e){
    e.preventDefault()
    showNav.classList.toggle('hidden')
    
})
hamClick.addEventListener('click', function(e){
    e.preventDefault()
    navshw.classList.remove('hidden')
    
})

cross.addEventListener('click', function(e){
    e.preventDefault()
    navshw.classList.add('hidden')
    
})


show1.addEventListener('click', function(e){
    e.preventDefault()
    showNav1.classList.toggle('hidden')
    
})

