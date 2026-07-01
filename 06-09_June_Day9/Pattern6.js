console.log("---------------------");
var ptr = "";
for (i = 1; i <= 4; i++) {
  for (var k = 1; k <= i; k++) {
    ptr += " ";
  }
  for (j = 4; j >= i; j--) {
    ptr += "*";
  }
  ptr += "\n";
}
console.log(ptr + "---------------------");
