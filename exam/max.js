var tweets = ["sachin tweet1", "sehwag tweet1", "kohli tweet1", "sachin tweet1", "kohli tweeet1"]
var obj = []
for (word of tweets) {
    if (word in obj) {
        obj[word] += 1;
    } else {
        obj[word] = 1;
    }
}
console.log(obj);
var arr = []
for (key in obj) {
    var num=([obj[key],[key]])
    arr.push(num);
 }

 var arr = arr.sort((a, b) => b - a)
 console.log("sorted array is  "+arr)
var elem = arr[0]
console.log("maximum number of tweets   "+elem);
