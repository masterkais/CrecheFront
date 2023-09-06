import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-form-fact-m',
  templateUrl: './form-fact-m.component.html',
  styleUrls: ['./form-fact-m.component.css']
})
export class FormFactMComponent implements OnInit {
  enfants: Enfant[] = [];
  selectedEnfant: Enfant | null = null;

  constructor(private enfantService: EnfantService) {}

  ngOnInit(): void {
    this.loadEnfants();
  }

  loadEnfants() {
    this.enfantService.getEnfants().then(enfants => {
      this.enfants = enfants;
    });
  }
  onSelectEnfant(event: any) {
    this.selectedEnfant = event.target.value as Enfant;
  }


  
}
