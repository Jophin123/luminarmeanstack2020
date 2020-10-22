var one=document.querySelector("#one")
one.addEventListener("click", ()=>{
    one.textContent="i am clicked";
    one.style.color="red";
})
 var two=document.querySelector("#two")
 two.addEventListener("dblclick", ()=>{
     two.textContent="doble clicked";
     thre.style.color="green";
 })
 var thre=document.querySelector("#thre")
 thre.addEventListener("mouseover", ()=>{
     thre.textContent="overed";
     thre.style.color="green";
 })
 var thre=document.querySelector("#thre")
 thre.addEventListener("mouseout", ()=>{
     thre.textContent=" not overed";
     thre.style.color="black";
 })


