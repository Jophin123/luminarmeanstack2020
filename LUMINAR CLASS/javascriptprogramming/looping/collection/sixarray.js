var arr1=[1,2,3,4]
var sum=6;
for (data1 of arr1)
{
    for(data2 of arr1)
    {
        if (data1+data2==sum){
            console.log(data1,data2);
        }
    }
}