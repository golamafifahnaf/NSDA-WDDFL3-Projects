const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

if(galleryImages){
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });
}

if(closeBtn){
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}