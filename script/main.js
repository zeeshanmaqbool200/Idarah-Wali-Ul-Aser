const navBtn = document.getElementById("nav-btn");
const mobileNav = document.getElementById("nav-right");
const loader = document.querySelector('.background');

document.body.style.overflow = "hidden";
loader.style.zIndex ="999999";
window.addEventListener("load", ()=>{
    loader.style.display = "none";
    document.body.style.overflowY = "scroll";
});

function toggleNav(){
    if(mobileNav.style.left == "-20px"){
        mobileNav.style.left = "800px";
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
        navBtn.innerText = "Menu";
    
    } else{
    mobileNav.style.left = "0px";
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";
     mobileNav.style.display = "flex";
    navBtn.style.zIndex = "111";
    mobileNav.style.zIndex = "3";
    mobileNav.style.left = "-20px";
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";
     mobileNav.style.display = "flex";
    mobileNav.style.zIndex = "999";
       document.body.style.overflow = "hidden";
    }

  }