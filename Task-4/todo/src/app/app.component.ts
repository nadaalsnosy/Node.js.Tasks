import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: { title: string, id: number, completed: boolean }[] = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
  ]


  isContainer = true;
  container() {
    return {
      container: this.isContainer
    }
  }

  isInput = true;
  input() {
    return {
      input: this.isInput
    }
  }

  isAddBtn = true;
  addBtn() {
    return {
      addBtn: this.isAddBtn
    }
  }

  isList = true;
  list() {
    return {
      list: this.isList
    }
  }

  isLi = true;
  li() {
    return {
      li: this.isLi
    }
  }

  isRemoveBtn = true;
  removeBtn() {
    return {
      removeBtn: this.isRemoveBtn
    }
  }




  todoItem = '';
  addTodo(input: HTMLInputElement) {
    this.todoItem = input.value;
    this.todos.push({
      "id": new Date().getTime(),
      "title": this.todoItem,
      "completed": false
    })
    this.todoItem = ' ';
    console.log(input.value)
  }



  removeTodo(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id == id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1)
    }
    console.log(todoIndex);
  }




}
