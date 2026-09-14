//promises : objeect
//promise2
const promiseone = new Promise( (res,rej)=> {
    console.log("promises made!");
    res("operation successful");
    let success=true;
    if(success) {
        res("ope success");
    }
    else {
        rej("failed");
    }
})

promiseone.then((result) => {
console.log(result);
}).catch((error) => {
console.log(error);
})