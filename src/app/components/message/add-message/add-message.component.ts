import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core/core.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import{User} from 'src/app/models/user';
import { Message } from 'src/app/models/message';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
 
  repas:string[]=[
    'Pizza',
    'Humberger',
    'Sandwich',
    'Tacos',
  ];
  messageText: string = ''; // Ajoutez cette propriété pour le champ de texte du message

  sendMessage() {
    if (this.selectedUser && this.messageText.trim() !== '') {
      const newMessage: Message = {
        sender: 'Me', // Vous pouvez définir l'expéditeur comme vous le souhaitez
        message_contenu: this.messageText,
        date: new Date(),
      };
      // Effacez le champ de texte du message après l'envoi
      this.messageText = '';
    }
  }
  selectedUser: User | null = null;
  FileForm:FormGroup;
  file:any;
  users: User[] = [];
  
selectUser(user: User) {
  this.selectedUser = user;
}

  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }
  submitData(){
    let formData=new FormData();
    formData.set("file",this.file)
    this.http.post("http://localhost:8082/api/message",formData)
    .subscribe((response) =>{});

  }
constructor(
  private  snackBar: MatSnackBar,
  private userService: UserService,
  private http:HttpClient,
  private _fb:FormBuilder,
  private _Fileservice:MessageService,
  private _dialogRef:MatDialogRef<AddMessageComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private _coreService:CoreService
){
  
  this.FileForm=this._fb.group({
    idMesg:'',
    message_contenu:'',
    nom:'',
    prenom:'',
  });
 }
 ngOnInit():void{
  this.FileForm.patchValue(this.data);
  this.userService.getAllUtilisateurs().subscribe((users: User[]) => {
    this.users= users;
  });

 }
onFormSubmit(){
  if(this.FileForm.valid){
    if(this.data){
      this._Fileservice.UpdateFile(this.data.idDoc,this.FileForm.value).subscribe({
        next:(val:any)=>{
          this._coreService.openSnackBar('File updated');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        },
      });
    }
    else{
      this._Fileservice.addFile(this.FileForm.value).subscribe({
        next:(val:any)=>{
        this._coreService.openSnackBar('Message envoyé avec succes!');
        
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        },
      });
    }
  }
}
onSelectUser(event: any) {
  this.selectedUser = event.target.value as User;
}

openSnackBar(message: string, selectedUser: string | undefined) {
  const snackBarMessage = selectedUser
    ? `Message for ${selectedUser}: ${message}`
    : message;

  this.snackBar.open(snackBarMessage, 'Close', {
    duration: 2000, // Durée d'affichage de la snackbar en millisecondes
  });
}

}