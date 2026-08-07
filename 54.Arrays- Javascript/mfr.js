// let arr =[ 1,13,5, 7,11];
// let Newarr = []
    
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     Newarr.push(element**2) //print the square of the given arr  and return with new value it
    
// }
//Easy way to print same with map  for Square 
// let Newarr = arr.map((e) =>{
//     return e**2

// })
// console.log(Newarr)

// const lessthanSeven = (e)=>{
//     if(e<7){
//         return true

//     }
//     return false
// }
// console.log(Newarr.filter(lessthanSeven))

// const greaterthanSeven = (e)=>{
//     if(e>7){
//         return true

//     }
//     return false
// }
// console.log(Newarr.filter(greaterthanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b) =>{ //or mutilplication , addition etc.
    return a+b
}
console.log(arr2.reduce(red))


