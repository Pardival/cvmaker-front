import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layout/header/header.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  imageAr = 'images/home-page/ar.png'
  imageEditBar = 'images/home-page/edit-bar.png'
  imageCat = 'images/home-page/cat.png'
}
