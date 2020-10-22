class bank
{
    //static sbk;
    createacc(pname,acno,balance,bankname){
        this.pname=pname;
        this.acno=acno;
        this.balance=balance;
        this.bankname=bankname;

    }
    deposit(amount){
       this.balance=balance+amount;
        console.log("balance is"+balance);
    }
    withdraw(amount){

        balance=balance-amount;
console.log("balance is"+balance)
    }
    balanceeq(amount){
        console.log("current balance is"+amount);
    }

}
var obj=new bank("jo",678,2000,"sbk")
obj.withdraw(500)