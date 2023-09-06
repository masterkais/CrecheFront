import { Injectable } from '@angular/core';
import { Enfant } from './enfant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
    
@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private apiUrl = 'http://localhost:8082/api/api/enfants'; 

  constructor(private http: HttpClient) { }
  private formData = new BehaviorSubject<any>(null);
//
private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();
  updateFormData(data: any) {
    this.formDataSubject.next(data);
  }
//

  setFormData(data: any) {
    this.formData.next(data);
  }
  

  getFormData() {
    return this.formData.asObservable();
  }

  private selectedEnfant: Enfant | undefined;

 
  getEnfants(): Promise<Enfant[]> {
    return this.http.get<Enfant[]>(this.apiUrl).toPromise()
      .then((data: Enfant[] | undefined) => {
        return data || []; 
      });
  }

  createEnfant(enfant: Enfant): Promise<Enfant> {
  return this.http.post<Enfant>(this.apiUrl, enfant).toPromise()
    .then((createdEnfant: Enfant | undefined) => {
      if (createdEnfant) {
        return createdEnfant;
      } else {
        throw new Error('Failed to create enfant.'); 
      }
    })
    .catch((error) => {
      console.error('Error creating enfant:', error);
      throw error; 
    });
}

updateEnfant(enfant: Enfant): Promise<Enfant> {
  return this.http.put<Enfant>(`${this.apiUrl}/${enfant.idenfant}`, enfant).toPromise()
    .then((updatedEnfant: Enfant | undefined) => {
      if (updatedEnfant) {
        return updatedEnfant;
      } else {
        throw new Error('Failed to update enfant.');
      }
    })
    .catch((error) => {
      console.error('Error updating enfant:', error);
      throw error; 
    });
}




  deleteEnfant(id: string): Promise<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).toPromise();
  }
}
