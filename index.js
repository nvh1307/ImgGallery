var images = document.querySelectorAll('.images img')

var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')

var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var current = 0;
function showG(){
    galleryImg.src=images[index].src
    gallery.classList.add('show')
}

images.forEach((item,index)=>{
    item.addEventListener('click', function(){
        current = index
        showG()
    })
})