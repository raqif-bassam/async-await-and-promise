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

const createPost = function(post,callback)
{
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title:'Post 3', body:'This is post 3'},getPosts);