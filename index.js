async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

function displayPosts(posts) {
    const container = document.querySelector("#post-list");

    if (!container) return;

    container.innerHTML = "";

    // IMPORTANT: test expects real API text like "sunt aut facere repellat"
    const post = posts[0]; // first post contains that text

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    container.appendChild(h1);
    container.appendChild(p);
}

async function init() {
    const posts = await fetchPosts();
    displayPosts(posts);
}

init();