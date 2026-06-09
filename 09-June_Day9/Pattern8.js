var ptr =""
for (var i = 1; i <= 3; i++) {
    //space
    for (var j = 3; j >= i; j--) {
        ptr += " ";
    }
    //star
    for (var k = 1; k <= i; k++) {
        ptr += " *";
    }
    ptr += "\n";
}
for (i = 1; i <= 4; i++) {
    for (var k = 1; k <= i; k++) {
        ptr +=" ";
    }
    for (j = 4; j >= i; j--) {
        ptr += "* ";
    }
    ptr += "\n";
}
console.log(ptr);