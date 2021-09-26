import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { TODO } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http : HttpClient,
    private userService: UserService
    ) { }

 
  todos: TODO [] = []

  fetchArticles() {
    this.http.get<{
      articles: TODO[]
    }>('http://localhost:9000/todos/getTodos', {
      headers: {
        authorization: this.userService.getToken()
      }
    }).subscribe(
      data => this.todos = data.todos,
      err => console.log(err)
    )
  }



  // fetchTodos() {
  //   this.http.get<TODO_TYPE[]>('https://jsonplaceholder.typicode.com/todos?_limit=15').subscribe(
  //     (data) => (this.todos = data),
  //     (err) => console.log(err)
  //   )
  // }

  // deleteTodo(id: number) {
  //   const todoIndex = this.todos.findIndex(item => item.id == id);
  //   if (todoIndex > -1) {
  //     this.todos.splice(todoIndex, 1)
  //   }
  // }

  // addTodo(todo: TODO_TYPE) {
  //   this.todos.push(todo);
  // }

}


type TODO_TYPE = { title: string, id: number, completed: boolean, userId: number}