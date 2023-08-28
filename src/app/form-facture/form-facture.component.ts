import { Component, OnInit } from '@angular/core';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-facture',
  templateUrl: './form-facture.component.html',
  styleUrls: ['./form-facture.component.css']
})
export class FormFactureComponent implements OnInit {
  enfants: Enfant[] = [];
  selectedEnfant: Enfant | null = null;

  constructor(private enfantService: EnfantService,private router: Router) {}
  //
  selectedAbonnement!: string;
  dateDebut!: Date;
  dateFin!: Date;
  onSubmit() {
    const formData = {
      enfant: this.selectedEnfant,
      abonnement: this.selectedAbonnement,
      startDate: this.dateDebut,
      endDate: this.dateFin,
      // Vous devez ajouter le prix ici en fonction du type d'abonnement
    };

    this.enfantService.updateFormData(formData);
    this.router.navigate(['/home1/facture']);

  }
  //

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
