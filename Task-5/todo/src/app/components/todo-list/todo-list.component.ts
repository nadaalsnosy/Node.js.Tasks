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


}
