class person
{
    setmeth(age,name){
        this.age=age;
        this.name=name;
    }
    printmeth(){
        console.log("age is"+this.age);
        console.log("name is"+this.name)
    }
}
var obj=new person()
obj.setmeth(25,"jo")
obj.printmeth()