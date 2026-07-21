function add(a,b) {
    console.log("Addition:",a+b);
    
}
function sub(a,b) {
    console.log("Subtraction:",a-b);
    
}
function mul(a,b) {
    console.log("Multiplication:",a*b);
    
}

function EvenNum() {
    let arr=[10,3,2,45,,6,74,4,8,80];
    console.log("Even numbers are:");
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
}

module.exports={add,sub,mul,EvenNum}
