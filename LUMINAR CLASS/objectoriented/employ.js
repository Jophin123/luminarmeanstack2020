class Employ{
    constructor(empid,name,desig,join,resign){
        this.empid=empid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
    }
    getemp = () => {
        console.log(this.name);
        console.log(this.desig);

    }
}
var obj1=new Employ(1,"jo","developer",1980,2004);
obj1.getemp()
var obj2=new Employ(2,"abhi","developer",1985,2005);
obj2.getemp()
var obj3=new Employ(3,"vishnu","ba",1997,2006);
obj3.getemp()
var obj4=new Employ(4,"tony","ba",1994,2003);
obj4.getemp()
var obj5=new Employ(5,"raju","qa",1993,2004);
obj5.getemp()
var obj6=new Employ(6,"john","qa",1987,2008);
obj6.getemp()
var employe=[];
employe.push(obj1);
employe.push(obj2);
employe.push(obj3);
employe.push(obj4);
employe.push(obj5);
employe.push(obj6);
console.log("All Employess Name And Designation");
var em=employe.map(obj=>obj.name +"-"+obj.desig);
console.log(em);

console.log("print all employee whose desihgnation is developer")
var em1=employe.filter(obj=>obj.desig="developer");
console.log(em1)

console.log("those who are working in 80s");
var em2=employe.filter(obj=>obj.join>1980 && obj.join<=1990);
console.log(em2);

console.log("who have experience more than 9 years");
var em3=employe.filter(obj=>obj.resign-obj.join>9)
console.log(em3);

console.log("sort employee based on joining year");
var em4=employe.map(obj=>obj.join).sort((obj1,obj2)=>obj1-obj2)
console.log(em4);

