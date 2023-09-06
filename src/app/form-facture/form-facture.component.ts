import { Component, OnInit } from '@angular/core';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';
import { Router } from '@angular/router';
import { AbonnementService } from '../abonnement.service';
import { Abonnement } from '../abonnement';

@Component({
  selector: 'app-form-facture',
  templateUrl: './form-facture.component.html',
  styleUrls: ['./form-facture.component.css']
})
export class FormFactureComponent implements OnInit {
  enfants: Enfant[] = [];
  selectedEnfant!: Enfant;
  //
  selectedType!: string;
  dateDebut!: Date; 
  dateFin!: Date; 

  constructor(private enfantService: EnfantService,private router: Router,private abonnementService: AbonnementService) {}
  onPasserAuPaiement() {
    
  
    const abonnement: Abonnement = {
      idAbo: 0,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      id_enfant: this.selectedEnfant.idenfant,
      type: this.selectedType,
      utilisateur: null,
      facture: null,
    };
  
    console.log('Abonnement to send:', abonnement); 
  
    this.abonnementService.sendAbonnementData(abonnement).subscribe(
      response => {
        console.log('Abonnement enregistré avec succès :', response);
       
      },
      error => {
        console.error('Erreur lors de l\'enregistrement de l\'abonnement :', error);
      }
    );
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
