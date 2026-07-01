console.log("---------------------");
var ptr = "";
for (i = 1; i <= 5; i++) {
  for (j = 5; j >= i; j--) {
    ptr += " ";
  }
  for (var k = 1; k <= i; k++) {
    if (i == 5 || k == 1 || k == i) {
      ptr += " *";
    } else {
      ptr += "  ";
    }
  }
  ptr += "\n";
}
console.log(ptr + "---------------------");
