document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.getElementById('create-task-form')

  createTaskForm.addEventListener('submit',(event) => { 
    event.preventDefault();
    const userInput = event.target.querySelector('#new-task-description')
    const ul = document.getElementById('tasks')
    const li = document.createElement('li')
      li.innerText = userInput.value
        ul.appendChild(li)

    const deleteButton = document.createElement('button')
      deleteButton.innerText = ' ❌ DONE'
        li.append(deleteButton)
    deleteButton.addEventListener('click',() => {
          const result = confirm('Done with this task?')
          if (result){
            li.remove()
          }
        })
  })

})

