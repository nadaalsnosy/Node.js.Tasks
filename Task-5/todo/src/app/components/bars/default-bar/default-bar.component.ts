import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css']
})
export class DefaultBarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  get userLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  get user() {
    return this.userService.getUser();
  }

  signout() {
    this.authService.signout();
  }

}
