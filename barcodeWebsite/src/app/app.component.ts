import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class AppComponent {
  title = 'barcodeWebsite';
  email: string = ''; 

  constructor(private firebaseService: FirebaseService) {}

  submitEmail(): void {
    this.firebaseService.saveEmail(this.email);
    this.email = '';
  }
}
