var word="h,h,hello,hei"
var words=word.split(" ");
var obj={}
for (item of word){
if(word in obj){

    obj[word]+=1
}
else{
    obj[word]=1;
}
}