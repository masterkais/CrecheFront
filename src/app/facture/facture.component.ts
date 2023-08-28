import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent  implements OnInit {
  formData: any;

  constructor(private enfantService: EnfantService) {}

  ngOnInit() {
    this.enfantService.formData$.subscribe(data => {
      if (data) {
        this.formData = data;
        // Vous pouvez également effectuer d'autres actions en fonction des données reçues
      }
    });
  }

  
}
