import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';


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
    this.todosService.fetchTodos()
  }

  get todos(): TODO[] {
    return this.todosService.todos
  }






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
