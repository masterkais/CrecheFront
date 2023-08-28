import { Component, OnInit } from '@angular/core';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-form-fact-t',
  templateUrl: './form-fact-t.component.html',
  styleUrls: ['./form-fact-t.component.css']
})
export class FormFactTComponent implements OnInit {
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
