var link_1;
var element_list;

window.onload = function(){
    element_list = document.querySelectorAll("b");  
    link_1 = document.getElementById("link1");
    if(link_1 !== "undefined" || link_1 !== "" || link_1 !== null){
        console.log("world"); 
        link_1.addEventListener("mouseover",changeColorFont());
        link_1.addEventListener("mouseleave",changeNormalFont());
    }else{
        alert("Some error occurred.");
    }
    console.log(link_1);
    console.log(element_list);
}

function changeColorFont(){
    for (var i=0; i<element_list.length; i++)
    {   
        console.log("hello");                                                 
        element_list[i].style.color = "red";
    }
}

function changeNormalFont()
{
  for (var i=0; i<element_list.length; i++) 
  {
        element_list[i].style.color = "black";
  }
}


