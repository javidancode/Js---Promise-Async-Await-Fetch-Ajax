let ul = document.querySelector(".list-group");
let btn = document.querySelector(".get-datas");



btn.addEventListener("click",function(){
    getPosts();
})


async function getPosts() {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");

    let result = await posts.json();

    let elem = "";

    result.forEach(post => {
        elem += `<li style = "margin-top:8px;border:1px slid red" class = "list-group-item">
                <p>${post.userId}</p>
                <p>${post.id}</p>
                <p>${post.title}</p>
                <p>${post.body}</p>
        </li>`
    });

    ul.innerHTML = elem;
}

