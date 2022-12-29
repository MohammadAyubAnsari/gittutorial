// everything in this is correct for the first segment i.e. callbacks and promises


const posts =[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}

];

function getPosts(){
        let output = '';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title}- last updated ${(new Date().getTime() - posts[i].createdAt)/1000}seconds ago</li>`;
        };
        document.body.innerHTML = output;
} 

function createPost(post){
    return new Promise((resolve, reject ) =>{
        setTimeout(()=>{
            // posts.push(post);
            // const error = false;
            // if(!error){
            //     resolve();
            // }else{
            //     reject('Array is empty')
            // }
            resolve(posts.push(post));
            reject('Array is empty');
        },1000);
    });
}

function deletePost(){
    return new Promise((resolve, reject ) =>{
        setTimeout(()=>{
            if(posts.length >0){
                const lastelement = posts.pop()
                resolve(lastelement);
            }else{
                reject('Array is empty')
            }
        },1000);
    });
}

createPost({title:`Post Three`, body:'This is post three',createdAt:new Date().getTime()})
createPost({title:`Post Four`, body:'This is post four',createdAt:new Date().getTime()})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{
                    getPosts()
                    deletePost().then(()=>{})
                    .catch((err)=>{
                        console.log('Inside catch block',err)
                    })
                    
                })
                
            })
            
        })

    })
})
