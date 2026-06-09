console.log("---------------------");
var ptr = "";
for (var i = 4; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    ptr += "* ";
  }
  ptr += "\n";
}
console.log(ptr + "---------------------");
