class student{
    static get printdet{
        
    }
    getstudent(rollno,name){
    
    this.rollno=rollno;
    this.name=name;
    }
    printstudent(){
       
        console.log("rollno is"+this.rollno);
        console.log("name is"+this.name);
    }
    
}
var obj=new student();
obj.getstudent(7,"jophin");
obj.printstudent();