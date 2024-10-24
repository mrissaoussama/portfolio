import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    RouterOutlet,
    HeaderComponent,
    PortfolioComponent,PostComponent,
    AboutComponent,
    FooterComponent,
    ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
