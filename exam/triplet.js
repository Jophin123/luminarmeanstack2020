var arr=[3,1,4,5,6,10]
var arr1=[];
for(num1 of arr ){
    for(num2 of arr){
        for(num3 of arr){
           var f=(num1**2)+(num2**2)
            if(f==(num3**2)){
                console.log("["+num1,num2,num3+"]");
            }
        }
    }
}