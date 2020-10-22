var num = 153;
var c = 0;
var n;
while (num != 0) {
    n = num % 10;
    num = parseInt(num / 10);
    c = c + (n * n * n);
}
console.log(c);