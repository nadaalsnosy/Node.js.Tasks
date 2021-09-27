import { Router } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { TODO } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }


  todos: TODO[] = []

  errors: string[] = [];


  getTodoById(id: string) {
    return this.todos.find(item => item._id == id);
  }

  baseUrl: string = 'http://localhost:9000/todos'
  get defaultOptions() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  generateError(msg: string) {
    this.errors.push(msg);

    setTimeout(() => {
      const errIndex = this.errors.indexOf(msg);
      this.errors.splice(errIndex, 1);
    }, 1500);
  }

  fetchTodos() {
    this.http.get<{
      todos: TODO[]
    }>(`${this.baseUrl}/getTodos`, this.defaultOptions).subscribe(
      data => this.todos = data.todos,
      err => {
        this.generateError('Failed To Fetch Todos');
      }
    )
  }


  createTodo(data: {title: string, content: string}) {
    this.http.post(`${this.baseUrl}/createTodos`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
        this.generateError('Failed To Create Todo');
       
      }
    );
  }

  updateTodo(id: string, data: { title: string, content: string }) {
    this.http.put(`${this.baseUrl}/updateTodos/${id}`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
       this.generateError('Failed To Update Todo');
      }
    )
  }


  deleteTodo(id: string) {
    this.http.delete(`${this.baseUrl}/deleteTodos/${id}`, this.defaultOptions).subscribe(
      data => {
        const todoIndex = this.todos.findIndex(item => item._id == id);
        if (todoIndex == -1) return;
        this.todos.splice(todoIndex, 1);
      },
      err => {
        this.generateError('Failed To Delete Todo');
      }
    ) 
  }
}


