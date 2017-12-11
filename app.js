window.onload = function() {
  onReady()
}

var onReady = function() {
  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')
  const removeToDo = document.getElementById('removeToDo')

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault()

      let title = newToDoText.value
      let newLi = document.createElement('li')
      let checkbox = document.createElement('input')

      checkbox.type = "checkbox"

      newLi.textContent = title
      newLi.appendChild(checkbox)

      toDoList.appendChild(newLi)

      newToDoText.value = ''
  });

  removeToDo.addEventListener('click', event => {
      let toDoItems = toDoList.getElementsByTagName("li")
      let numItems = toDoItems.length

      for(var i = 0; i < numItems; i++) {
        let item = toDoItems[i]
        let itemChecked = item.getElementsByTagName('input')[0].checked
        if (itemChecked) {
          toDoList.removeChild(item)
          i--
          numItems--
        }
      }
  });
}
