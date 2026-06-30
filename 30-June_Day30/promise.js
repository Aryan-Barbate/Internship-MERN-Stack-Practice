function Withdraw(amount,balance) {
    return new Promise((resolve,reject)=>{
        console.log(("Transaction started..."));
        
        setTimeout(()=>{
            if(amount<=0){
                reject(new Error("Invalid amount ,Transaction failed!!! "))
                return
            }

            if(amount> balance){
                reject(new Error("Insufficent balance ,Transaction failed!!! "))
                return
            }

            const remainingBalance = balance-amount
            resolve("Transaction Successful")
        },2000);
    })
}

Withdraw(500,2000)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
        
    })