const navBtn = document.getElementById("nav-btn");
const mobileNav = document.getElementById("nav-right");
const loader = document.querySelector('.background');

window.addEventListener("load", ()=>{
    loader.style.display = "none";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
})

function toggleNav(){
    if(mobileNav.style.left == "0px"){
        mobileNav.style.left = "800px";
        mobileNav.style.gap = "0rem";
        mobileNav.style.height = "1vh";
        mobileNav.style.borderRadius = "0 0 0 500px";
        mobileNav.style.display = "0";
        mobileNav.style.top = "-500px";
        document.body.style.overflow = "auto";
        navBtn.innerText = "Menu";
    
    } else{
    mobileNav.style.left = "0px";
    mobileNav.style.top = "0px";
    mobileNav.style.gap = "5rem";
     mobileNav.style.height = "100vh";
     
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";

    navBtn.style.zIndex = "111";

    

       mobileNav.style.borderRadius = "0px";
       document.body.style.overflow = "hidden";
    }
}