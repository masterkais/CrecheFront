import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  private subject=new Subject<any>();
  envoyerMessage(Message:string){
    this.subject.next({text:Message});
  }
  getMessage():Observable<any>{
    return this.subject.asObservable(); 
  }
  constructor() { }
}
