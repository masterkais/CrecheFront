import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from './abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  private backendUrl = 'http://localhost:8082/api/abonnements';

  constructor(private http: HttpClient) {}

  sendAbonnementData(abonnement: Abonnement) {
    return this.http.post(`${this.backendUrl}`, abonnement);
  }
}
