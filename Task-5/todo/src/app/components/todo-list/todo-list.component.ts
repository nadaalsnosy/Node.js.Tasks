import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../service/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    if (this.todos.length == 0){
      this.todosService.fetchTodos()
    }
  }

  get todos() {
    return this.todosService.todos
  }

  // todos: { title: string, id: number }[] = [
  //   {
  //     "id": 1,
  //     "title": "delectus aut autem",
  //   },
  //   {
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //   },
  //   {
  //     "id": 3,
  //     "title": "fugiat veniam minus",
  //   },
  //   {
  //     "id": 4,
  //     "title": "et porro tempora",
  //   },
  //   {
  //     "id": 5,
  //     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //   },
  //   {
  //     "id": 6,
  //     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  //   },
  //   {
  //     "id": 7,
  //     "title": "illo expedita consequatur quia in",
  //   },
  //   {
  //     "id": 8,
  //     "title": "quo adipisci enim quam ut ab",
  //   },
  //   {
  //     "id": 9,
  //     "title": "molestiae perspiciatis ipsa",
  //   },
  //   {
  //     "id": 10,
  //     "title": "illo est ratione doloremque quia maiores aut",
  //   },
  // ]





  // deleteTodo(id: number) {
  //   const todoIndex = this.todos.findIndex(item => item.id == id);
  //   if (todoIndex > -1) {
  //     this.todos.splice(todoIndex, 1)
  //   }
  // }
  // addTodo(todo: { title: string, id: number }) {
  //   this.todos.push(todo);
  // }


}
