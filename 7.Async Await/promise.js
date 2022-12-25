//promises are asynchronous
//promises may be fulfilled and there is a chance of getting rejected


// const dadsPromise = new Promise((resolve,reject) =>{
//     new setTimeout(()=> {
//         //after 10 days = 10*24*60*60*1000 milliseconds
//         var salaryCredited = true
//         var salary = 100000
//         var costofps5 = 40000
//         var costofps4 = 30000
//         if (salaryCredited === true && salary > costofps5){
//             resolve('Buy him a ps3')
//         }else if (salaryCredited === true && salary > costofps4){
//             reject('Buy him a ps4')
//         }else{
//             reject('sorry son, i will try next month')
//         }
//     },1000)
    
// })
// console.log(dadsPromise)


// async function dadmakepromise(){
//     const dadsPromise = await new Promise((resolve,reject) =>{
//         new setTimeout(() => {
//             //after 10 days = 10*24*60*60*1000 milliseconds
//             var salaryCredited = true
//             // var salary = 100000
//             var salary = 34000
//             var costofps5 = 40000
//             var costofps4 = 30000
//             if (salaryCredited === true && salary > costofps5){
//                 resolve('Buy him a ps3')
//             }else if (salaryCredited === true && salary > costofps4){
//                 reject('Buy him a ps4')
//             }else{
//                 reject('sorry son, i will try next month')
//             }

//         },1000)
//     })
//     console.log(dadsPromise)
// }

// dadmakepromise()



// async function dadmakepromise()
// {
//     try{
//         const dadsPromise = await new Promise((resolve,reject) =>{
//             new setTimeout(() => {
//                 //after 10 days = 10*24*60*60*1000 milliseconds
//                 var salaryCredited = true
//                 // var salary = 100000
//                 var salary = 34000
//                 var costofps5 = 40000
//                 var costofps4 = 30000
//                 if (salaryCredited === true && salary > costofps5){
//                     resolve('Buy him a ps3')
//                 }else if (salaryCredited === true && salary > costofps4){
//                     reject('Buy him a ps4')
//                 }else{
//                     reject('sorry son, i will try next month')
//                 }
    
//             },1000)
//         })
//         console.log(dadsPromise)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// dadmakepromise()

// async function dadmakepromise()
// {
//     try{
//         const dadsPromise = await new Promise((resolve,reject) =>{
//             new setTimeout(() => {
//                 //after 10 days = 10*24*60*60*1000 milliseconds
//                 var salaryCredited = true
//                 // var salary = 100000
//                 var salary = 34000
//                 var costofps5 = 40000
//                 var costofps4 = 30000
//                 if (salaryCredited === true && salary > costofps5){
//                     resolve('Buy him a ps3')
//                 }else if (salaryCredited === true && salary > costofps4){
//                     reject({success: false, message:'should i buy you a ps4 instead'})
//                 }else{
//                     reject('sorry son, i will try next month')
//                 }
      
//             },1000)
//         })
//         console.log(dadsPromise)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// dadmakepromise()

async function dadmakepromise()
{
    try{
        const dadsPromise = await new Promise((resolve,reject) =>{
            new setTimeout(() => {
                //after 10 days = 10*24*60*60*1000 milliseconds
                var salaryCredited = true
                // var salary = 100000
                var salary = 3400
                var costofps5 = 40000
                var costofps4 = 30000
                if (salaryCredited === true && salary > costofps5){
                    resolve('Buy him a ps3')
                }else if (salaryCredited === true && salary > costofps4){
                    reject({success: false, message:'should i buy you a ps4 instead'})
                }else{
                    reject('sorry son, i will try next month')
                }
      
            },1000)
        })
        console.log(dadsPromise)
    }
    catch(err)
    {
        console.log(err)
    }
}

dadmakepromise()