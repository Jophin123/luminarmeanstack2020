var arr = [1, 2, 3, 4, 5, 6]
var arra = 6;
flag = 0;
for (item of arr) {
    if (arra == item) {
        flag = flag + 1;
        break;
    }

}
if (flag > 0) {
    console.log("element found")
}
