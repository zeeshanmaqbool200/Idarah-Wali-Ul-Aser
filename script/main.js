const navBtn = document.getElementById("nav-btn");
const mobileNav = document.getElementById("nav-right");
const loader = document.querySelector('.background');

<<<<<<< HEAD
=======
document.body.style.overflow = "hidden";

>>>>>>> master
window.addEventListener("load", ()=>{
    loader.style.display = "none";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
})

function toggleNav(){
<<<<<<< HEAD
    if(mobileNav.style.left == "0px"){
=======
    if(mobileNav.style.left == "-20px"){
>>>>>>> master
        mobileNav.style.left = "800px";
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
        navBtn.innerText = "Menu";
    
    } else{
<<<<<<< HEAD
    mobileNav.style.left = "0px";
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";
     mobileNav.style.display = "flex";
    navBtn.style.zIndex = "111";
    mobileNav.style.zIndex = "3";
=======
    mobileNav.style.left = "-20px";
    navBtn.style.zIndex = "9999";
     navBtn.innerText = "Close";
     mobileNav.style.display = "flex";
    mobileNav.style.zIndex = "99";
>>>>>>> master
       document.body.style.overflow = "hidden";
    }
}
