var todos = {
  todo: [],
  //adds a todo to the todo array with a fixed default of false
  addTodo: function(newTodo) {
    this.todo.push({
      todoText: newTodo,
      completed: false
    });
  },
  //edits 1 todo from todo array
  editTodo: function(pos, newString) {
    this.todo[pos].todoText = newString;
  },
  //Deletes 1 todo from todo array
  deleteTodo: function(pos) {
    this.todo.splice(pos, 1);
  },
  //Change between true or false for completed
  toggleComplete: function(pos) {
    var x = this.todo[pos];
    x.completed = !x.completed;
  },
  toggleAll: function() {
    var total = this.todo.length;
    var completedTodos = 0;
    //Getting total number of completed todos
    this.todo.forEach(function(todo){
      if(todo.completed === true){
        completedTodos++;
      }
    });
    this.todo.forEach(function(todo){
      if(completedTodos === total){
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })
  }
}

var handlers = {
  toggleAll: function() {
    todos.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var todoTextInput = document.getElementById('todoTextInput');
    todos.addTodo(todoTextInput.value);
    todoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var editPositionInput = document.getElementById('editPositionInput');
    var editPositionText = document.getElementById('editPositionText');

    todos.editTodo(editPositionInput.valueAsNumber, editPositionText.value);
    editPositionInput.value = "";
    editPositionText.value = "";
    view.displayTodos();
  },
  deleteTodo: function(pos) {
    todos.deleteTodo(pos);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todos.toggleComplete(toggleCompletedInput.value)
    toggleCompletedInput.value = "";
    view.displayTodos();
  }
}

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = '';
    todos.todo.forEach(function(todo){
      var todosLi = document.createElement("li");
      var todoTextCompleted = "";
      if (todo.completed === true) {
        todoTextCompleted = '(x) ' + todo.todoText
      } else {
        todoTextCompleted = '( ) ' + todo.todoText
      }

      todosLi.id = todo;
      todosLi.textContent = todoTextCompleted
      todosLi.appendChild(view.createDelete());
      todosUl.appendChild(todosLi)
    })
  },
  createDelete: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setEventListeners: function(){
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(e){
      var clicked = e.target;
      if(clicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(clicked.parentNode.id));
      }
    })
  }
}

view.setEventListeners();
