class student
{
    setstudent(name,roll,course,total)
    {
        this.name=name;
        this.roll=roll;
        this.course=course;
        this.total=total

    }
    getstudent(){
        console.log("student name is "+ this.name);
        console.log("student roll is "+ this.roll);
        console.log("student course is "+ this.course);
        console.log("student total is "+ this.total);
    }
}
var obj=new student("jo",7,"mca",500)
var obj1=new student("amal",7,"mca",300)
var obj2=new student("vish",7,"bca",300)
Array.push(obj,obj1,obj2);
var cfilter= ar.filter(obj=>obj.course=="bca")
console.log(cfilter);