import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crecheproject';
  constructor(private authservice: AuthService, public dialog: MatDialog) {
    var firebaseConfig = {
      apiKey: "AIzaSyAVTnqbLrN7HrKo4__7OMy6E8082JkBBTM",
      authDomain: "ecmprojet-1211d.firebaseapp.com",
      projectId: "ecmprojet-1211d",
      storageBucket: "ecmprojet-1211d.appspot.com",
      messagingSenderId: "271088907713",
      appId: "1:271088907713:web:39c930d53e6580d114ab40",
      measurementId: "G-S50Q8Q7EDJ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Dialog Title', content: 'Dialog Content' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
