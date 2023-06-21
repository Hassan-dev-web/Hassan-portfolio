//header toggle

let MenuBtn = document.getElementById('menuBtn')

MenuBtn.addEventListener('click', function(e){
     document.querySelector('body').classList.toggle("mobile-nav-active")
     this.classList.toggle('fas fa-times')
})


// typing effect

let typed = new Typed('.auto-input',{
    strings: ['Web developer!',  'It Consoltant!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true, 

})