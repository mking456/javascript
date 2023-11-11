let todoList = [
  { item:'buy milk',
    duedate:'4-10-2023'
  },
  {  item:'buy book',
     duedate:'5-10-2023'
  }];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
   let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem,duedate: todoItem});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for (let i = 0; i < todoList.length; i++){
    // let item = todoList[i].item;
    // let duedate = todoList[i].duedate;
      let {item,duedate} = todoList[i];
   newHtml += `
   <div>
 
      <span>${item}<span>
      <span>${duedate}<span>
      <button onclick="todoList.splice(${i},1);
      displayItems();">Delete</button>
   </div>
   `;
  }
  containerElement.innerHTML = newHtml;
}
