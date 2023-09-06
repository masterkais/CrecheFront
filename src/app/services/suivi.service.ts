import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SuiviModel} from '../models/suivi';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http: HttpClient) { }
  addSuivi(data:SuiviModel) :Observable<any>{
    return this.http.post('http://localhost:8082/api/suivi',data);
    
     }
     UpdateSuivi(idSuiv:number,data:SuiviModel) :Observable<any>{
    return this.http.put(`http://localhost:8082/api/suivi/${idSuiv}`,data);
  }
     getSuiviList() :Observable<any>{
    return this.http.get('http://localhost:8082/api/suivi/suivis');
     }
     DeleteSuivi(idSuiv:number) :Observable<any>{
    return this.http.delete(`http://localhost:8082/api/suivi/${idSuiv}`);
     }
}
