let button =document.querySelectorAll(".box button");
Array.from(button).forEach((but)=>{
    but.addEventListener("click",(ele)=>{
        changecolor(ele.target);
    })
});
let body= document.querySelector("body");
let heading =document.querySelector(".conatiner");
let end= document.querySelector(".end");
function changecolor(ele){
    if(ele.className=="one"){
 body.setAttribute("class","one");
 heading.classList.add("class","add");
 end.classList.add("class","add2");
 
    }
     else if(ele.className=="two"){
 body.setAttribute("class","two");
 heading.classList.add("class","two");
 end.classList.add("class","two");
 
    }
   else   if(ele.className=="three"){
 body.setAttribute("class","three");
 heading.classList.add("class","three");
 end.classList.add("class","three");
 
    }
   else   if(ele.className=="four"){
 body.setAttribute("class","four");
 heading.classList.add("class","four");
 end.classList.add("class","four");
 
    }
}

