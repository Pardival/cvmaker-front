import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cvmaker-front';
}
