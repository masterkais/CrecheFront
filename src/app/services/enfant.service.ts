import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfantService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getAllEnfant():Observable<any>{
    return this.http.get('http://localhost:8082/api/enfant/enfants');
    }
    
}
