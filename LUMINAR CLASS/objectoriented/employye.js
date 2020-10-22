class student{
    //static get printdet{
        
    //}
    constructor(rollno,name){
    
    this.rollno=rollno;
    this.name=name;
    }
    printstudent(){
       
        console.log("rollno is"+this.rollno);
        console.log("name is"+this.name);
    }
    
}
var obj=new student(9,"jo");

obj.printstudent();