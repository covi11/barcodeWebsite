import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAUvsKu2qaEM9ueiLpuHPhIvceRhx9DjMs",
  authDomain: "dripeaters.firebaseapp.com",
  databaseURL: "https://dripeaters-default-rtdb.firebaseio.com",
  projectId: "dripeaters",
  storageBucket: "dripeaters.firebasestorage.app",
  messagingSenderId: "848739321457",
  appId: "1:848739321457:web:bc1df95b26eb3cba747dd0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {}


  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  private async emailExists(email: string): Promise<boolean> {
    const dbRef = ref(database, "emails");
    
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const emails = snapshot.val();
        return Object.values(emails).some((entry: any) => entry.email === email);
      }
    } catch (error) {
      console.error("❌ Error checking email existence:", error);
    }
    return false;
  }


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

    if (await this.emailExists(trimmedEmail)) {
      alert("❌ This email is already subscribed.");
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
