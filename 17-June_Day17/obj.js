let emp = {
    name:"Rohan Patil",
    age : 34,
    gender: "male",
    company:{
        id: 101,
        salary: 55000,
        role: "Manager",
        company: "XYZ Pvt limited"
    }
}

for(let key in emp){
    if(typeof emp[key] === "object") {
        for(let Inner in emp[key]) {
            console.log(emp[key][Inner]);
        }
    } else {
        console.log(emp[key]);
    }
}