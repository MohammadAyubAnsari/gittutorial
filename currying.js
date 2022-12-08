//using CURRYING
// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplyByTwo = function(y){
//     let x = 2 
//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this , 2)
// multiplyByTwo(5)// Here y=5 so answer is 2*5=10

// let multiplyByTwo = multiply.bind(this , 2, 3)// Here y=3 and the value y=5 is suppressed
// multiplyByTwo(5)

// let multiplyByTwo = multiply.bind(this , )// Here x=1 and the value y=4 answer is 1*4 = 4
// multiplyByTwo(2,4)

// let multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(10)


// USING CLOSURE
let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(3) //6

let multiplyByThree = multiply(3)
multiplyByThree(12) //36