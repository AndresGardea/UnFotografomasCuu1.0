const Lightbox = () => {
    const zoombtn = document.querySelectorAll('.img-btn');
    const closebtn = document.querySelectorAll('.close');
    const containerLightbox = document.querySelector('.lightbox');
    const containerImage = document.querySelector('.img-show');
    const image = document.querySelectorAll('.imagen-galeria');
    const copy = document.querySelector('.copy');
    const imgLightbox = document.querySelector('.img-lightbox');
    const back = document.querySelector('.back');


    zoombtn.forEach(image => {
        image.addEventListener('click', () => {
            containerLightbox.classList.toggle('lightbox-move');
            containerImage.classList.toggle('lightbox-show');
            back.classList.toggle('lightbox-back');
            addImage(image.getAttribute('src'), image.getAttribute('alt'))
        })
    })

    closebtn.forEach(btn => {
        btn.addEventListener('click', () => {
            containerLightbox.classList.toggle('lightbox-move');
            containerImage.classList.toggle('lightbox-show');
            back.classList.toggle('lightbox-back');
        })
    })


    const addImage = (srcImage, altImage) => {

        imgLightbox.src = srcImage;
        copy.innerHTML = altImage;
    }

}


$(document).ready(function () {
    Lightbox(Lightbox)
});