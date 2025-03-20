const navBtn = document.getElementById("nav-btn");
const mobileNav = document.getElementById("nav-right");
const loader = document.querySelector('.background');
const renderImg = document.getElementById('render-images');


const gallery = 80;
let htmlContent = ``;
for (let i = 1; i <= gallery; i++) {
    renderImg.innerHTML += `<div class="image"><img alt="Maktab Wali Ul Aser Image" src="/images/maktab/${i}.JPG"></div>`;

    
}