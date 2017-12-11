window.onload = function() {
  onReady()
}

var onReady = function() {
//function to create new to-do items and also render the UI
  var createNewToDo = function () {
    if (!newToDoText.value) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    })

    newToDoText.value = ''

    renderTheUI()
  }

//function to rebuild the UI with current state
  var renderTheUI = function () {
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li')

        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"

        const title = document.createElement('span')
        title.textContent = toDo.title

        toDoList.appendChild(newLi)
        newLi.appendChild(title)
        newLi.appendChild(checkbox)
    })
  }

//Main program code
  let toDos = []

  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault()

    createNewToDo()
  })

  renderTheUI()
}
