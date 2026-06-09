console.log("---------------------");
var ptr = "";
for (i = 1; i <= 4; i++) {
  for (j = 3; j >= i; j--) {
    ptr += " ";
  }
  for (var k = 1; k <= i; k++) {
    ptr += " *";
  }
  ptr += "\n";
}
console.log(ptr + "---------------------");