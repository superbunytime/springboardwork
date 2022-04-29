document.addEventListener("DOMContentLoaded", function() {

    let todoList = document.getElementById("todoList")
    let form = document.getElementById("form")
    
    //localStorage get
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    console.log(savedTodos)
    for (let i = 0; i < savedTodos.length; i++) {
      let newTodo = document.createElement("li")
      newTodo.innerText = savedTodos[i].task
      newTodo.isCompleted = savedTodos[i].isCompleted ? true : false
      if (newTodo.isCompleted) {
        newTodo.style.textDecoration = "line-through";
      }
      todoList.appendChild(newTodo)
      let removeButton = document.createElement("button")
      removeButton.innerText = "x"
      newTodo.appendChild(removeButton)
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        let newTodo = document.createElement("li")
        newTodo.innerText = document.getElementById("todoTask").value
        let removeButton = document.createElement("button")
        removeButton.innerText = "x"
        todoList.appendChild(newTodo)
        newTodo.appendChild(removeButton)
        form.reset()

        //localStorage set
        savedTodos.push({ task: newTodo.innerText, isCompleted: false })
        localStorage.setItem("todos", JSON.stringify(savedTodos))
    })

    todoList.addEventListener("click", function(event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase()
        if (targetTagToLowerCase === "li") {
          event.target.style.textDecoration = "line-through"
        } else if (targetTagToLowerCase === "button") {
          event.target.parentNode.remove()
        }
      })


})


//alright, now implement localstorage