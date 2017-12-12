window.onload = function() {
  onReady()
}

var onReady = function() {
//function to create new to-do items and also render the UI
  var createNewToDo = function () {
    if (!newToDoText.value) { return }

    id++

    toDos.push({
      id: id,
      title: newToDoText.value,
      complete: false
    })

    newToDoText.value = ''

    renderTheUI()
    saveToLocalStore(toDos)
  }

//function to remove to do items from array and rebuild UI
  var removeToDo = function (btnId) {
    let id = btnId.replace('deleteBtn','')

    toDos = toDos.filter(toDo => toDo.id != id)

    renderTheUI()
    saveToLocalStore(toDos)
  }

//function to save To Dos array to local storage at end of create or remove
  var saveToLocalStore = function (toDos) {
   localStorage.setItem("ToDos", JSON.stringify(toDos))
  }

//function to rebuild the UI with current state
  var renderTheUI = function () {
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li')
        newLi.id = "toDo" + toDo.id

        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"

        const title = document.createElement('span')
        title.textContent = toDo.title

        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Remove"
        deleteButton.id = "deleteBtn" + toDo.id
        deleteButton.addEventListener('click', event => {
          removeToDo(event.target.id)
        })

        toDoList.appendChild(newLi)
        newLi.appendChild(checkbox)
        newLi.appendChild(title)
        newLi.appendChild(deleteButton)
    })
  }

//Main program code
  let toDos = (JSON.parse(localStorage.getItem("ToDos")) || [])
  let id = 0

  if (toDos.length > 0) {
    id  = Math.max(...toDos.map(toDo => toDo.id))
  }

  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')
  const deleteToDoButton = document.querySelector('.deleteButton')

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault()

    createNewToDo()
  })

  renderTheUI()
}
