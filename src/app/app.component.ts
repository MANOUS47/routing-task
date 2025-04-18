import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './Contacts/Contacts.component';
import { MealsComponent } from './Meals/Meals.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HomeComponent, MealsComponent , FooterComponent , NavbarComponent , AboutComponent , ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'breakFast';
}
