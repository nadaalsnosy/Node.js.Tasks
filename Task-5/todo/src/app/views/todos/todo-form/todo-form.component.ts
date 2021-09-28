import { TodosService } from './../../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
  ) { }

  editMode: boolean = false;
  id: string = '';
  title: string = '';
  content: string = '';


  get errors() {
    return this.todosService.errors;
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params.id

    if (idParam != 'new') {
      this.editMode = true;
      this.id = idParam;

      const todo = this.todosService.getTodoById(this.id);

      if (!todo) return;
      this.title = todo.title;
      this.content = todo.content;
    }
  }

  submit() {
    const data = {
      title: this.title,
      content: this.content,
    };

    if (!this.editMode) {
      this.todosService.createTodo(data);
    } else {
      this.todosService.updateTodo(this.id, data)
    }

  }

}
