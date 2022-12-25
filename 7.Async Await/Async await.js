console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve('ticket')
        },3000)
    })

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`))
    // const getbutterPopcorn = new Promise((resolve,reject) => resolve(`butter popcorn`))
    // const getColdDrinks = new Promise((resolve,reject) => resolve(`Cold Drinks`))
    const getCandy = new Promise((resolve,reject) => resolve(`candy`))
    const getCoke = new Promise((resolve,reject) => resolve(`coke`))

    let ticket = await promiseWifeBringingTickets
    console.log(`wife: I have the ${ticket}`)
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn 
    console.log(`husband: I have got some ${popcorn}`)
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butterPopcorn = await getbutterPopcorn
    console.log(`husband: I have got some ${butterPopcorn}popcorn`)
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late'); 
    console.log(`husband: thanks for the reminder *grins*`)

    // let coldDrinks = await getColdDrinks
    // console.log(`wife: I need cold drinks`)
    // console.log(`husband: ufff, okay`)
    // console.log(`husband : I have got chill ${coldDrinks}`)
    return ticket
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4:show ticket');
console.log('person5:show ticket');