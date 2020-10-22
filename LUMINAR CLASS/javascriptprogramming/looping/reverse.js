var num = 123;
var sum = 0;
var n=0;
while (num != 0) {
    var n = num % 10;
    sum = sum * 10 + n;
    num = parseInt(num / 10);
    
}
console.log(sum);