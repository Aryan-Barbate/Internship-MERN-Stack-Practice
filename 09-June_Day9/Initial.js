let n = 5;

for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j < 2 * n - 1; j++) {

        if (
            j == n - 1 - i ||
            j == n - 1 + i ||
            (i == 2 && j > n - 1 - i && j < n - 1 + i)
        ) {
            str += "*";
        } else {
            str += " ";
        }
    }

    console.log(str);
}