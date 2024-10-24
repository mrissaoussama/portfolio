import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formMessage: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.password.length < 6) {
      this.formMessage = 'Password must be at least 6 characters long.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.formMessage = 'Passwords do not match.';
      return;
    }

    this.formMessage = `Registration successful. Email sent to ${this.email}`;
    (event.target as HTMLFormElement).reset();

    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
