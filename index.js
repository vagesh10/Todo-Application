let todoItemContainer = document.getElementById("todoItemsContainer");
let addTodo=document.getElementById("addtodobutton");
addTodo.onclick=function(){
    newTodo()
}
function  deleteTodo( todoId){
  let todoEle = document.getElementById(todoId);
  todoItemContainer.removeChild(todoEle);
}
let todoList=[
{
    text:"Learn HTML",
    uniqueId:1
},
{
    text:"Learn CSS",
    uniqueId:2
},
{
    text:"Learn JavaScript",
    uniqueId:3
},
{
    text:"React",
    uniqueId:4
}
];
 function onTodoChecked(checkboxId,labelboxId){
    let checkedElement = document.getElementById(checkboxId);
    console.log(checkedElement)
    let labelElement11=document.getElementById(labelboxId);
    if(checkedElement.checked===true){
        labelElement11.classList.add("checked");
    }else{
        labelElement11.classList.remove("checked");
    }
}

function createAndAppendTodo(todo){
let todoElement = document.createElement("li");
todoElement.classList.add("todo-list-container", "d-flex", "flex-row");
let checkboxId ="checkbox"+todo.uniqueId;
let labelboxId="label"+todo.uniqueId;
let todoId="todo"+todo.uniqueId
todoElement.id=todoId;
todoItemContainer.appendChild(todoElement);
let inputElement = document.createElement("input");
inputElement.type = "checkbox";


inputElement.id = checkboxId;
inputElement.onclick= function(){
    onTodoChecked(checkboxId,labelboxId);
}
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container" ,"d-flex","flex-row");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.textContent = todo.text;

labelElement.id=labelboxId;

labelElement.classList.add("checkbox-label");
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
deleteIcon.onclick=function(){
    deleteTodo(todoId)
}
deleteIconContainer.appendChild(deleteIcon);
}

for (let eachTodo of todoList){
createAndAppendTodo(eachTodo);

}
function newTodo(){
    let inputElement=document.getElementById("todoUserInput");
    let todoCount = todoList.length;
    todoCount+=1 ;
    let inputValue = inputElement.value ;
    if(inputValue==="" ){
      alert("enter the valid Todo")
      return 
    }
    let newTodo={
        text:inputValue,
        uniqueId:todoCount
    }
    createAndAppendTodo(newTodo);
    inputValue.value=""

}
