import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Message } from '../models/message';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MessageService {
   private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor(private http: HttpClient) {}

   addFile(data:Message) :Observable<any>{
	return this.http.post('http://localhost:8082/api/message',data);
	
   }
   UpdateFile(idMesg:number,data:File) :Observable<any>{
	return this.http.put(`http://localhost:8082/api/message/${idMesg}`,data);
}
   getFileList() :Observable<any>{
	return this.http.get<Message[]>('http://localhost:8082/api/message/messages');
   }
   DeleteFile(idMesg:number) :Observable<any>{
	return this.http.delete(`http://localhost:8082/api/message/${idMesg}`);
   }
}
