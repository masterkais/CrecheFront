import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  ngOnInit(): void {
  }
  
}
