class student {
    constructor(id, rollno, name, total, course) {
        this.id = id;
        this.rollno = rollno;
        this.name = name;
        this.total = total;
        this.course = course;
    }
    getmeth = () => {
        console.log("roll no is " + this.rollno);
        console.log("name is " + this.name);
        console.log("total is " + this.total);
        console.log("course is " + this.course);
    }
}
var obj = new student(1, 11, "jo", 140, "mca")
var obj1 = new student(2, 12, "amal", 120, "bca")
var obj2 = new student(3, 13, "raju", 135, "bca")
var arr = [];
sum=0;
arr.push(obj);
arr.push(obj1);
arr.push(obj2);
for (item of arr) {
    if (item.total > 130) {
        console.log("student name who have more than 130 is " + item.name + " id is " + item.id);
    }
}
for (item1 of arr) {
    if (item1.course == "bca") {
        console.log("student who take bca is " + item1.name);
    }
}
for (item2 of arr) {

    if (item2.course == "bca") {
        sum=sum+item2.total;}
    }console.log("total of bca is " + sum);




