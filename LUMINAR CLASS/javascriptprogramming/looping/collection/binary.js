var arr=[1,2,3,4,5,6,7,8]
var element=6;
var low=0;
var up=arr.length-1;
while(low<upp)
{
    var mid=math.floo((low+up)/2);
    if(arr>mid[arr]){
        low=mid+1
    }
    else if(arr<mid[arr])
    {
        up=mid-1;
    }
    else if(mid==arr[mid])
    {
        console.log("element found");
    }
}