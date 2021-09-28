var addTask = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var element = document.getElementById("todo");
var listArray = [];



var createNewTask = function(str) {
    var list = document.createElement("li");
    var label = document.createElement('label');
    var deleteButton = document.createElement("button");

   
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener('click', removeList);

    label.innerText = str;

    list.appendChild(label);
    list.appendChild(deleteButton);

    return list;

}



var addList = function () {
    var inputValue = addTask.value;
    var listItems = createNewTask(inputValue);
    element.appendChild(listItems);
}



var removeList = function (ev) {
    var parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);
    var data = this.parentElement.firstChild.innerText;
    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            break;
        }
    }
}

addButton.addEventListener('click', addList);