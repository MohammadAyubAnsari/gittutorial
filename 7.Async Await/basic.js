console.log('person1:show ticket');
console.log('person2:show ticket');

const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve('ticket')
    },3000)
})

const getPopcorn = promiseWifeBringingTickets.then((t)=> {
    console.log('wife: I have the tickets')
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})

// getPopcorn.then((t)=> console.log(t) )

const getbutterPopcorn = promiseWifeBringingTickets.then((t)=> {
    console.log('husband: I have got some popcorn')
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} & butter popcorn`))
})

getbutterPopcorn.then((t)=> console.log(t) )


console.log('person4:show ticket');
console.log('person5:show ticket');
 