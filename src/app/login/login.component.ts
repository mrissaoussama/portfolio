import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    this.formMessage = 'Welcome';
    (event.target as HTMLFormElement).reset();
  }
}
