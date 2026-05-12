const galleryImages = document.querySelectorAll('.gallery-image');
const fullImage = document.getElementById('full-image');
const downloadBtn = document.getElementById('download-btn');

galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        fullImage.src = this.src;
        downloadBtn.href = this.src;
    });
});