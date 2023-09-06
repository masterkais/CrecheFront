import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

   addFile(data:File) :Observable<any>{
	return this.http.post('http://localhost:8082/api/document',data);
	
   }
   UpdateFile(idDoc:number,data:File) :Observable<any>{
	return this.http.put(`http://localhost:8082/api/document/${idDoc}`,data);
}
   getFileList() :Observable<any>{
	return this.http.get('http://localhost:8082/api/document/documents');
   }
   DeleteFile(idDoc:number) :Observable<any>{
	return this.http.delete(`http://localhost:8082/api/document/${idDoc}`);
   }
}
