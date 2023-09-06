import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  currentDay = 'Mon'; // Jour actuel par défaut
  
  // Fonction pour changer le jour
  changeDay(newDay: string) {
    this.currentDay = newDay;
  }
}
