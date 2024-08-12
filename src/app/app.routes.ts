import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes =
[
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
