let addTask  = document.querySelector(".add");
let input = document.querySelector("input");
let taskList = document.querySelector(".task-list");

addTask.addEventListener("click",()=>{
    if(input.value.trim() !==""){
        let task = document.createElement("div");
        task.classList.add("task")
        let message = document.createElement("span");
        message.innerText =input.value ;
        let buttonDiv = document.createElement("div");
        let remove = document.createElement("button");
        remove.innerText = "Delete";
        remove.classList.add("remove");
        let edit = document.createElement("button");
        edit.innerText = "Edit"
        edit.classList.add("edit")
        task.appendChild(message);
        buttonDiv.appendChild(remove);
        buttonDiv.appendChild(edit);
        task.appendChild(buttonDiv)
        taskList.appendChild(task)
        input.value = "";

        edit.addEventListener("click", () => {
            
            if (message.style.textDecoration === "line-through") {
                message.style.textDecoration = "none";
            } else {
                message.style.textDecoration = "line-through";
            }
        });
        remove.addEventListener("click",()=>{
            task.remove()
        })
    }else{
        alert("please fill the input");
    }
});



