let n = 6;

for (let i = 1; i <= n; i++) {
    let ptr = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n)
            ptr += "*";
        else
            ptr += " ";
    }
    console.log(ptr);
}