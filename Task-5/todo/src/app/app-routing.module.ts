import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TodoFormComponent } from './views/todos/todo-form/todo-form.component';
import { IsNotLoggedInGuard } from './guards/is-not-logged-in.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'form/:id',
    component: TodoFormComponent
  },
  {
    path: 'form/new',
    component: TodoFormComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
