var addZoom = function (target) {
    var magnifying_area = document.querySelector(".img-show");
    var magnifying_img = document.querySelector(".img-lightbox");

    magnifying_area.addEventListener("mousemove", function (event) {
        clientX = event.clientX - magnifying_area.offsetLeft
        clientY = event.clientY - magnifying_area.offsetTop

        var mWidth = magnifying_area.offsetWidth
        var mHeight = magnifying_area.offsetHeight
        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100

        //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
        magnifying_img.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(1.5)'
    })

    magnifying_area.addEventListener("mouseleave", function () {
        magnifying_img.style.transform = 'translate(0,0) scale(1)'
    })
};

$(document).ready(function () {
    addZoom(addZoom)
});