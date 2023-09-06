import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}


   getAllUtilisateurs():Observable<any>{
	return this.http.get('http://localhost:8082/api/api/utilisateurs');
   }
   deleteUtilisateur(idutilisateur:number) :Observable<any>{
	return this.http.delete(`http://localhost:8082/api/deleteUtilisateur/${idutilisateur}`);
   }
}
