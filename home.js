import { postData } from "./data.js"
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
    
    mainEl.innerHTML=toRender;
}
//render max 3 items by default
renderMain()
