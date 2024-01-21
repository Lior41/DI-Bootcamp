// ex1 //

function compareToTen(num){
    return new Promise ((resolve,reject)=>{
        if (num <= 10){
            resolve('The number is less or equal to 10 !!');
        } else {
            reject('this number is bigger than 10 !! ');
        }
    } );
}

compareToTen(11).then((results)=>{
    console.log(results);
}
).catch((err)=>{
    console.log(err)
})
// ex2 //

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Success');
    },4000);
})


// ex3 // 

 Promise.resolve(3).then((results)=>{
    console.log(results)
 })

 Promise.reject('rejectPromise').catch((error)=>{
    console.log(error);
 })

 