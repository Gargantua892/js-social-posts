const likeLabel = document.querySelector(".js-like-button");
console.log(likeLabel);

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=29"
            // null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//ciclare array per tirare fuori le proprietà degli oggetti
posts.forEach(Element => {

    container.append(dynamicPost(Element.author.image, Element.author.name, Element.created, Element.content, Element.media, Element.likes));
    // profilePic.innerHTML = Element.author.image;

});

    //likes counter
    likeLabel.addEventListener("clik", function(){
        console.log("funziona");
    });





//prendiamo gli elementi del dom che ci servono per l'output
// const post = document.querySelector(".post");
// const container = document.getElementById("container");
// const profilePic = document.querySelector(".post-meta__icon");
// const author = document.querySelector(".post-meta__author");
// const postText = document.querySelector(".post__text");
// const postImg = document.querySelector(".post__image");
// const likeCounter = document.getElementById("like-counter-1");

//Ciclo per creare le card dinamiche
// for(let i = 0; i < posts.length; i++){
//     // container.append(generateElement("div", "post"));
//     // post.append(generateElement("div", "post"));


// }





//impostazioni interazione in frontend





//Funzione per creare nuovi elementi 
// function generateElement(tagType, classToAdd){
//     let newElement = document.createElement(tagType);
//     newElement.classList.add(classToAdd);
//     return newElement;
// }

function dynamicPost(proPic, author, date, description, postImg, likes){

    let newElement = document.createElement("div");
    newElement.classList.add("post");

    newElement.innerHTML = 
    `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${proPic}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${author}</div>
                <div class="post-meta__time">${date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${description}</div>
    <div class="post__image">
        <img src="${postImg}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
            </div>
        </div> 
    </div>            
</div>
`;

return newElement;

}