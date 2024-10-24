import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() profilePhoto: string = '';
  @Input()  name: string = '';
  @Input()company: string = '';
   @Input() rating: number = 4;
   @Input() description: string = '';
}
