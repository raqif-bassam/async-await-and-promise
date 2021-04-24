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

// createPost({title:'Post 3', body:'This is post Three.'}).
// then(getPosts).catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 20;
const promose3 = new Promise((resole,reject)=>{
    setTimeout(resole, 2000,'Goodbye');
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

Promise.all([promise1,promise2,promose3,promise4]).then(values=>
    console.log(values));