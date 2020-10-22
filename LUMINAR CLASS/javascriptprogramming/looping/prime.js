var num1 = 9;
flag = 0;
for (var i = 0; i <= 9; i++) {
    if (num1 % i == 0) {
        flag = flag + 1;
        break;
    } else {
        flag = 0;
    }
    if (flag > 0) {
        console.log(" not");
    } else {
        console.log("prime");
    }
}