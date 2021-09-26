import { TodosService } from './../../service/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  // @Output() todoReady = new EventEmitter();


  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }


  todoTitle: string = ''

  // createTodo() {
  //   const todo = {
  //     title: this.todoTitle,
  //     id: new Date().getTime()
  //   }
  //   this.todoReady.emit(todo);
  //   this.todoTitle = ' ';
  //   console.log(this.todoTitle)
  // }

  createTodo() {
    const todo = {
      title: this.todoTitle,
      id: new Date().getTime(),
      completed: false,
      userId: 1,
    }
    this.todosService.addTodo(todo)
    this.todoTitle = ''
  }


}
