var str="abcd";
var n=str.length;
var cnt=0,i=0;
var encrpt="";
while(i<n){
    cnt=i+1;
    while(cnt--)
        encrpt+=str[i];
        i++;
    
}
console.log(encrpt);
