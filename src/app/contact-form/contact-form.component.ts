import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    this.formMessage = 'Thank you for your message!';
    (event.target as HTMLFormElement).reset();
  }
}
