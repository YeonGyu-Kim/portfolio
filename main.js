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
        navBar.classList.add('navbar-dark') ; 
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
        scrollIntoView(link);
    }
    // Change to selected button
    const selectedBtn = document.querySelector(".navbar__menu__item.selected");    
    selectedBtn.classList.remove('selected');
    target.classList.add('selected');
});

//Navbar toggle button for small screen
const toggleButton = document.querySelector(".navbar__toggle-btn");
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    
});



//Handle click on "contact me" button on home
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", ()=> {    
   scrollIntoView("#contact")
   
    
});

// Make home slowly fade to transparent when scrolling down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;

    // Show "arrow up" button when scrolling down
    const deleteButton = document.querySelector(".arrow-btn");
    if(window.scrollY > homeHeight/2){
        deleteButton.classList.add("visible");
        deleteButton.addEventListener("click", () => {
            scrollIntoView("#home");
        })
    }else{
        deleteButton.classList.remove("visible");
    }
    
});

// Project filtering
const workButton = document.querySelector(".work__categories");
const projectButton = document.querySelector(".work__projects");
const projects = projectButton.querySelectorAll(".project");
workButton.addEventListener("click" , (event) => {
    const target = event.target;
    const filter = target.dataset.filter || target.parentNode.dataset.filter;
    if(filter === null){
        return;
    }

    projectButton.classList.add("anim-out");
    setTimeout(() => {
        projects.forEach(project => {
            if(filter === "*" || filter === project.dataset.type ){
                project.classList.remove("invisible");
            }else{
                project.classList.add("invisible");
            }
        });

        projectButton.classList.remove("anim-out");
    },300);

    // Change to selected button
    const selectedBtn = document.querySelector(".category__btn.selected");
    selectedBtn.classList.remove("selected");
    target.classList.add("selected");
});



