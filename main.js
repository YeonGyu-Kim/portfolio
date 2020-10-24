'use strict'

const scrollIntoView = (link) => {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block:"start"});

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
    
});


// Handle scrolling when tapping on the navbar menu
const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    

if(link === null){
    return;
}else{
    menu.classList.remove("open");
    scrollIntoView(link);
}
    // Move active box
    const activeBtn = document.querySelector(".navbar__menu__item.active");    
    activeBtn.classList.remove('active');
    target.classList.add('active');
});

//Navbar toggle button for small screen
const toggleButton = document.querySelector(".navbar__toggle-btn");
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    
})



//Handle click on "contact me" button on home
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", (event)=> {    
   scrollIntoView("#contact")
    
});

// Make home slowly fade to transparent when scrolling down
const home = document.querySelector(".home__container");
const hoemHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / hoemHeight;

    //Show "arrow up" button when scrolling down
    const deleteButton = document.querySelector(".arrow-btn");
    if(window.scrollY > hoemHeight/2){
        deleteButton.classList.add("visible");
        deleteButton.addEventListener("click", () => {
            scrollIntoView("#home");
        })
    }else{
        deleteButton.classList.remove("visible");
    }
    
});



