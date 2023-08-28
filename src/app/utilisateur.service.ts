import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8082/api/utilisateurs';

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(newUser: User): Observable<User[]> {
    // Send a POST request to add a new user
    return this.http.post<User[]>(this.apiUrl, newUser);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.idutilisateur}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: string): Observable<User[]> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<User[]>(url);
  }
}
