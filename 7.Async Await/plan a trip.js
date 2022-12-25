// function buycar(){
//     setTimeout(()=> {
//         console.log('buy a car')
//     }, 10000)
// }

// function planatrip(){
//     setTimeout(()=> {
//         console.log('lets go to manali')
//     }, 2000)
// }
// buycar()
// planatrip()  


//Using callbacks
// function buycar(cb1,cb2,cb3){
//     setTimeout(()=> {
//         console.log('buy a car')
//         cb1(cb2,cb3)
//     }, 10000)
// }

// function planatrip(cb1,cb2){
//     setTimeout(()=> {
//         console.log('lets go to manali')
//         cb1(cb2) 
//     }, 2000)
// }


// function reachmanali(cb){
//     setTimeout(() => {
//         console.log('reached manali')
//         cb()
//     },1000)
// }

// function gotofamousmountain(){
//     setTimeout(() => {
//         console.log('reached mountain')
//     },1000)
// }

// buycar(planatrip,reachmanali,gotofamousmountain)



//Using promises
function buycar(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve('buy a car')
        }, 5000)
    })
    
}

function planatrip(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve('lets go to manali')
        }, 2000)  
    })
}


function reachmanali(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('reached manali')
        },1000)
    })
}

function gotofamousmountain(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('reached mountain')
        },1000)
    })
}

// buycar().then((msg) => {
//     console.log(msg)
//     planatrip().then((msg2) => {
//         console.log(msg2)
//         reachmanali().then((msg3) => {
//             console.log(msg3)
//             gotofamousmountain().then((msg4) => {
//                 console.log(msg4)
//             })
//         })
//     })
// })

//async await
async function fun1(){
    const msg = await buycar()
    console.log(msg)
    const msg2 = await planatrip()
    console.log(msg2)
    const msg3 = await reachmanali()
    console.log(msg3)
    const msg4 = await gotofamousmountain()
    console.log(msg4)
}
fun1()
// console.log()
//     planatrip().then((msg2) => {
//         console.log(msg2)
//         reachmanali().then((msg3) => {
//             console.log(msg3)
//             gotofamousmountain().then((msg4) => {
//                 console.log(msg4)
//             })
//         })
//     })
// })


    // ,reachmanali,gotofamousmountain)