console.log("This is Promise") ;

let prom1 = new Promise((resolve, reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("No Random number are Supporting You")
    }
    else{
        setTimeout(() => {
        console.log("yes I am Done")
        resolve("Farhan")
        
        }, 2000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("No Random number are Supporting You 2")
    }
    else{
        setTimeout(() => {
        console.log("yes I am Done 2")
        resolve("Farhan 2")
        
        }, 1000);
    }
})
let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)


})
