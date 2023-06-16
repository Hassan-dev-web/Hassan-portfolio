//header toggle

let MenuBtn = document.getElementById('menuBtn')

// MenuBtn.addEventListener('click', function(e){
//      document.querySelector('body').classList.toggle("mobile-nav-active")
//      this.classList.toggle('hello world')
// })



function hideText(){
    let x = document.getElementById('nav');

    if(x.style.display === 'block'){
        x.style.display = 'none'
    }else{
        x.style.display = 'block'
    }
}




// typing effect

let typed = new Typed('.auto-input',{
    strings: ['Web developer!',  'Ui/UX Designer!', 'Video Editing!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true, 

})