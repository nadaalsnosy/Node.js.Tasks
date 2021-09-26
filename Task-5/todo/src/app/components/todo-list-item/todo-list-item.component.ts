import { TodosService } from './../../service/todos.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoData:  { title: string, id: number} =   { title: '', id: new Date().getTime() }

  // @Output() itemClicked = new EventEmitter()

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }
 

  deleteItem() {
    this.todosService.deleteTodo(this.todoData.id)
  }

}

