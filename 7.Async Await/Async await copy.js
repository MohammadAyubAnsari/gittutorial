console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve('ticket')
        },3000)
    })

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`))
    const getbutterPopcorn = new Promise((resolve,reject) => resolve(`butter popcorn`))
    const getColdDrinks = new Promise((resolve,reject) => resolve(`Cold Drinks`))


    let popcorn = await getPopcorn

    let butterPopcorn = await getbutterPopcorn

    let coldDrinks = await getColdDrinks

    let ticket = await promiseWifeBringingTickets

    let [pop,butterpop,coldDrink]= await Promise.all([popcorn,butterPopcorn,coldDrinks])
    console.log(`${pop},${butterpop},${coldDrink}`)

    return ticket
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4:show ticket');
console.log('person5:show ticket');
 