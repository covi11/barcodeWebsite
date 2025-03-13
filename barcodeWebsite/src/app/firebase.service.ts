import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUvsKu2qaEM9ueiLpuHPhIvceRhx9DjMs",
  authDomain: "dripeaters.firebaseapp.com",
  databaseURL: "https://dripeaters-default-rtdb.firebaseio.com",
  projectId: "dripeaters",
  storageBucket: "dripeaters.firebasestorage.app",
  messagingSenderId: "848739321457",
  appId: "1:848739321457:web:bc1df95b26eb3cba747dd0"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {}

  /**
   * ✅ Validate Email Format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * ✅ Save Email to Firebase Realtime Database
   */
  async saveEmail(email: string): Promise<void> {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      alert("❌ Please enter your email!");
      return;
    }

    if (!this.isValidEmail(trimmedEmail)) {
      alert("❌ Invalid email format! Please enter a valid email.");
      return;
    }

    try {
      const emailRef = ref(database, "emails");
      const newEmail = push(emailRef);
      await set(newEmail, { email: trimmedEmail });

      alert("✅ Success! You're now subscribed.");
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  }
}
