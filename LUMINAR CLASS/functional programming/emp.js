class employee {
    constructor(eid, ename, desig, sal) {
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.sal = sal;

    }
    getdet = () => {
        console.log("employee name" + this.ename);
        console.log("desig" + this.desig);
        console.log("salary" + this.sal);
    }
}
var obj = new employee(1001, "jo", "dev", 30000)
var obj1 = new employee(1002, "vivek", "tester", 30000)
var obj2 = new employee(1003, "tony", "ba", 30000)
var temp = [];
temp.push(obj)
temp.push(obj1)
temp.push(obj2)
for (a of temp) {
    if (a.sal > 22000) {
        console.log(a.ename)
    }
}