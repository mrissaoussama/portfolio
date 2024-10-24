import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'work', component: PortfolioComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
