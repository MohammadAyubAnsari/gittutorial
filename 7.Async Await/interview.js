async function playPlayStaion(){
    console.log('a')
    console.log('b')
    // console.log('c')
    const msg = await new Promise((resolve,reject) =>{
        setTimeout(()=> {resolve('Buying a playstation')}, 1000)
    } )
    console.log(msg)
    // setTimeout(() => console.log('d'),0)
    const msg2 = await new Promise((resolve,reject) => {
        setTimeout(() => resolve('starting the pS'),50)
    })
    console.log(msg2)
    console.log('playing')
    //How to print a,b,c,d,e instead of a,b.e,d,c
}
playPlayStaion()