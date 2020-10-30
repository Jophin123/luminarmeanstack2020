var min = 30;
var max = 58;
var count = 2;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (num in arr) {
    var number = num ** count;


    if (number > min && number < max) {
        console.log(number);  
    }
   
}
