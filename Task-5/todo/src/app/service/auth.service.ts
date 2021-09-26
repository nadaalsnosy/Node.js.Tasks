import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  signin(data: { email: string, password: string }) {
    this.http.post<{
      user: USER,
      token: string
    }>('http://localhost:9000/auth/signin', data).subscribe(
      data => {
        this.userService.setUser(
          data.user,
          data.token
        );
        console.log(data)
      },
      err => console.log(err)
    )
  }

  signup(data: { name: string, email: string, password: string }) {
    this.http.post('http://localhost:9000/auth/signup', data).subscribe(
      data => {
        this.router.navigateByUrl('/signin'),
          console.log(data)
      },
      err => console.log(err)
    )
  }

  signout() {
    this.userService.clear()
    this.router.navigateByUrl('/signin')
  }
}
