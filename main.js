'use strict'

const scrollIntoView = (link) => {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block:"center"});

}

// Make navbar transparent when it is on the top
const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if(window.scrollY > navBarHeight){
        navBar.classList.add('navbar-dark')  
        }
    else {
        navBar.classList.remove('navbar-dark');
    }    
    
})


// Handle scrolling when tapping on the navbar menu
const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    

if(link === null){
    return;
}else{
scrollIntoView(link);
}
    // Move active box
    const activeBtn = document.querySelector(".navbar__menu__item.active");    
    activeBtn.classList.remove('active');
    target.classList.add('active');
})

//Handle click on "contact me" button on home
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", (event)=> {    
   scrollIntoView("#contact")
    
})

