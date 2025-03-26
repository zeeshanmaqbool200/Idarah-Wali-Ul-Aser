const renderImg = document.getElementById('render-images');
const gallery = 80;


for (let i = 1; i <= gallery; i++) {
    renderImg.innerHTML += `<div class="image"><button onclick="downloadImage(this)">&DownArrow;</button><img alt="Maktab Wali Ul Aser Image" src="/images/maktab/${i}.JPG"></div>`;
}

//get image after for loop func otherwise it will return null because images are excuted after getting inside img
const insideImg = document.querySelectorAll(".image img");

for (const pics of insideImg) {


    function downloadImage(e) {
        let targetImage = e.parentElement.querySelector('img').src;
        let link = document.createElement('a');
        link.href = targetImage;
        link.download = targetImage.trim();
        link.click();
    }
}
