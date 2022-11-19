// banner open script
const bannerEl = document.getElementById("banner-el")
console.log(bannerEl)
bannerEl.addEventListener('click',function(){
    console.log("clicked")
    window.open('#', '_blank');
})