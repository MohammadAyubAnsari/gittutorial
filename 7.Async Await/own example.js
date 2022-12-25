async function fruit(){
    
    const msg = await new Promise((resolve,reject) =>{
        setTimeout(()=> {resolve('First I ate two apples')}, 1000)
    } )
    console.log(msg)
    // setTimeout(() => console.log('d'),0)
    const msg2 = await new Promise((resolve,reject) => {
        setTimeout(() => resolve('then ate three oranges'),50)
    })
    console.log(msg2)
    console.log('Now I am full')
    //How to print a,b,c,d,e instead of a,b.e,d,c
}
fruit()