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
<<<<<<< HEAD
        navBtn.innerText = "Menu";
=======
>>>>>>> 0d12ab76b6b643988aea0ccc6bf5547f41eb33f3
    
    } else{
    mobileNav.style.left = "0px";
    mobileNav.style.top = "0px";
    mobileNav.style.gap = "5rem";
     mobileNav.style.height = "100vh";
<<<<<<< HEAD
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";
=======
    navBtn.style.zIndex = "111";
     navBtn.style.background = "red";
>>>>>>> 0d12ab76b6b643988aea0ccc6bf5547f41eb33f3
       mobileNav.style.borderRadius = "0px";
       document.body.style.overflow = "hidden";
    }
}