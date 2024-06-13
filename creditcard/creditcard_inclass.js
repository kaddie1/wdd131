// document.getElementById('todoInput').addEventListener('keypress', function (e) 
// {

//     if(e.key === 'Enter')
//     {

//         const newListItem = document.createElement('li');
//         newListItem.innerHTML = document.getElementById('todoInput').value;
//         document.getElementById('todoInput').value = '';
//         //newListItem.classList.add('beautifulListItem)
//         document.getElementById('myTodos').appendChild(newListItem);




//     }


// });



// document.getElementById('todoInput').addEventListener('keypress', function (e) 
// {

//     if(e.key === 'Enter')
//     {

//         const newListItem = document.createElement('li');
//         newListItem.innerHTML = document.getElementById('todoInput').value;
//         document.getElementById('todoInput').value = '';
//         //newListItem.classList.add('beautifulListItem)
//         document.getElementById('myTodos').appendChild(newListItem);




//     }


// });



// document.getElementById('deleteAllBtn').addEventListener('click', function ()
// {
//     document.getElementById('myTodos').innerHTML= '';


// });



// function 




// )








document.addEventListener('DOMContentLoaded', function () {
    loadTodoList();
  });
  
  document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
      const newListItem = document.createElement('li');
      newListItem.textContent = this.value.trim(); // Use textContent for security
      document.getElementById('myTodos').appendChild(newListItem);
      this.value = '';
      saveTodoList(); // Save after updating the DOM
    }
  });
  
  document.getElementById('deleteAllBtn').addEventListener('click', function () {
    const todoList = document.getElementById('myTodos');
    todoList.innerHTML = ''; // Clears the list on the page
    saveTodoList(); // Save the now empty list to local storage
  });
  
  function saveTodoList() {
    const todos = [];
    document.querySelectorAll('#myTodos li').forEach((item) => {
      todos.push(item.textContent);
    });
    localStorage.setItem('todoList', JSON.stringify(todos));
  }
  
  function loadTodoList() {
    const todos = JSON.parse(localStorage.getItem('todoList'));
    if (todos) {
      const todoListElement = document.getElementById('myTodos');
      todos.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;
        todoListElement.appendChild(listItem);
      });
    }
  }