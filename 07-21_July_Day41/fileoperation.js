const fs = require("fs");

function fileOperation() {
    console.log("File Operations....");
    
    //read write
    fs.writeFile("file1.txt", "Dummy text ", () => {
        console.log("data written successfully");
    });

    console.log("File Operations Ended....");
}

module.exports={fileOperation}