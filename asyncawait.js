const posts = [{title:'Post 1', body:'This is post 1'},
{title:'Post 2', body:'This is post 2'}]

const getPosts = function()
{
    let output = "";
    setTimeout(() => {
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = function(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }
            else
                reject('Error: Something went wrong!');
        }, 2000);
    })
}
// Async / Await

async function init()
{
    await createPost({title:'Post 3', body:'This is post Three.'});
    getPosts();
}

init();

async function fetchUsers()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();