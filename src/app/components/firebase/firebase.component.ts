// src/app/standalone/firebase.component.ts

import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-firebase',
  standalone: true,
  templateUrl: './firebase.component.html',
})
export class FirebaseComponent {
  constructor() {
    this.initializeFirebase();
  }

  private initializeFirebase() {
    // Your Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyA_zwnGTxb7sSwmeWd3RbU8Oty33k0fkOE',
      authDomain: 'ng-detailing-app.firebaseapp.com',
      projectId: 'ng-detailing-app',
      storageBucket: 'ng-detailing-app.firebasestorage.app',
      messagingSenderId: '552145781918',
      appId: '1:552145781918:web:3fa634ad73c6f30aaae78f',
      measurementId: 'G-G3KWT2TN6E',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app); // or other Firebase services as needed
  }
}
