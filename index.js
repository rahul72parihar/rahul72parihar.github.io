const bodyEl = document.getElementById("outer")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "I put my heart and my soul into my work, and have lost my mind in the process",
        likes: 223
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 998
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let message = ""
for(let i = 0; i<posts.length; i++){
    let curr = posts[i]
    message+=`<section>
            <div class = "container">
                <div class = "creator">
                    <img src = "${curr.avatar}" class = "avatar">
                    <div class="detail">
                        <p class = "bold">${curr.name}</p>
                        <p >${curr.location}</p>
                    </div>
                </div>
            <img src = "${curr.post}" class = "post" alt="image posted by creator" ondblclick="change(${i})">
            </div>
            <div class = "container ">
                <img src="images/icon-heart.png" class = "icons" alt="like" id = "like${i}"  onclick="change(${i})">
                <img src="images/icon-comment.png" class = "icons" alt="comment">
                <img src="images/icon-dm.png" class = "icons" alt="send">
                <p class = "bold comment"><span id = "noOfLikes${i}">${curr.likes}</span> likes</p>
                <p class = "comment"><span class = "bold">${curr.username}</span> ${curr.comment}</p>
            </div>
        </section>
    `
}
bodyEl.innerHTML=message;

function change(a){
    let b = "like"+a
    const btn = document.getElementById(b);
    b="noOfLikes"+a
    const box = document.getElementById(b);
    console.log(btn.src);
    if(btn.src=="http://rahulp.me/images/icon-heart.png"){
        btn.src = "images/likespink.png";
        posts[a].likes++
    }
    else{
        btn.src ="images/icon-heart.png"
        console.log(posts[a].likes)
        posts[a].likes--
    }
    box.textContent= posts[a].likes;
    // }
    // else if(btn.src =="images/likespink.png"){
    //     btn.src =  "images/icon-heart.png";
    // }
}
