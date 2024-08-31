let navBtn = document.getElementById("nav-btn");
let mobileNav = document.getElementById("nav-right");


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
       mobileNav.style.borderRadius = "0px";
       document.body.style.overflow = "hidden";
    }
}