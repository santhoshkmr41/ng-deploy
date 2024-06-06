import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { MainShopsListComponent } from './components/main-shops-list/main-shops-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopListComponent,MainShopsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-1-aj17';
  isAdmin = true;
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

}
