var list=document.getElementById("ul_id")


function addTask()
{
    var task=document.getElementById("task");
var li=document.createElement("li");
var li_text=document.createTextNode(task.value);
li.appendChild(li_text);


var button=document.createElement("button");
var button_text=document.createTextNode("Delete");
button.setAttribute("onClick","del_btn(this)")

button.appendChild(button_text);


var edit_btn=document.createElement("button");
var edit_text=document.createTextNode("Edit");
edit_btn.setAttribute("onClick","edt_btn(this)")
edit_btn.appendChild(edit_text);



list.appendChild(li)
li.appendChild(button)
li.appendChild(edit_btn)
task.value=""

}



function del_btn(e){
    
    e.parentNode.remove();
}

function del_Task(){
    list.innerHTML=""
}

function edt_btn(e){
var editValue=prompt("Enter edit value",e.parentNode.firstChild.nodeValue );
e.parentNode.firstChild.nodeValue=editValue;
}