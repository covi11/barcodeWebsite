import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { FirebaseService } from './firebase.service';  // ✅ Import Firebase Service

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]  // ✅ Add FormsModule to imports array
})
export class AppComponent {
  title = 'barcodeWebsite';
  email: string = '';  // Two-way binding variable

  constructor(private firebaseService: FirebaseService) {}  // Inject FirebaseService

  /**
   * ✅ Function to handle email submission
   */
  submitEmail(): void {
    this.firebaseService.saveEmail(this.email);
    this.email = ''; // Clear input field after submission
  }
}
