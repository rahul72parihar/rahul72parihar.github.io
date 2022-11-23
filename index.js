// IMPORT DATA
import { postData } from "./data.js"

// banner open script
const bannerEl = document.getElementById("banner-el")
console.log(bannerEl)
bannerEl.addEventListener('click',function(){
    window.open('home.html','_self');
})

// RENDER 

const mainEl = document.getElementById("main-el")
let currMax = 3;
function renderMain(){
    let toRender = ``
    let i
    for(i = 0; i<currMax && i<postData.length; i++){
        toRender+=  
        `
        <a href= ${postData[i].link}>
        <div class="post clickable">
            <img class="main-image" src=${postData[i].imgSrc} alt="post image">
            <p class="main-date">${postData[i].date}</p>
            <p class="main-heading">${postData[i].heading}</p>
            <p class="main-para">${postData[i].paragraph}</p>
        </div>
        </a>
        `
    }
    if(i<postData.length){
        toRender+= 
            `
                <div id="more-post">
                    <img id = "more-btn" class="more-image clickable" src="images/plus.png" alt="More Post">
                    <p id ="more-head" class="more-heading">View More</p>
                </div>
            `
    }
    mainEl.innerHTML=toRender;
}
//render max 3 items by default
renderMain()


// MOREBTN
document.addEventListener('click',function(e){
    if(e.target.classList.contains('more-image')){
        currMax+=3;
        renderMain()
    }
    else if(e.target.classList.contains('post')){
        console.log(e.target.dataset.uuid)
    }
})
