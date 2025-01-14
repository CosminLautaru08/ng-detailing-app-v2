import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FirebaseComponent } from './components/firebase/firebase.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FirebaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ng-detailing-app';
}
