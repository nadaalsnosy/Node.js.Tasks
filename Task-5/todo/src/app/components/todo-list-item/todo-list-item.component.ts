import { defaultTodo } from './../../interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TODO } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TODO = defaultTodo;

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }


  deleteItem() {
    this.todosService.deleteTodo(this.todo._id)
  }

  iscompleted = false

  completedTodo() {
    this.iscompleted = !this.iscompleted
  }

}

