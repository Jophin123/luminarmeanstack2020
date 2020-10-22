var ar="HHHPPSDAAA";
var emp=[];
for(item of ar){
    if(item in emp){
        emp[item]+=1;
    }else{
        emp[item]=1;
    }
}
console.log(emp);


