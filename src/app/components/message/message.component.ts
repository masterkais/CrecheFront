
import {OnInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/services/core/core.service';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];
  searchControl=new FormControl;
  displayedColumns: string[] = ['idMesg','message_contenu','nom','prenom'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  allUsers: any;
  selectedUser: User;
  users: User[] = [];
  FileForm: any;
  private _fb: any;
  private _dialogRef: any;
  private _Fileservice: any;
  data: any;
  selectUser(user: User) {
  this.selectedUser = user;
  }
  messageText: any;
  constructor(
    private userService: UserService,
    private _dialog:MatDialog,
    private _FileService:MessageService,
    private _coreService:CoreService,
    ){}
    
  ngOnInit():void{
    this.getFileList();
    this.userService.getAllUtilisateurs().subscribe((users: User[]) => {
      this.allUsers = users;
    });
  }
  openAddFileForm(){
    const dialogRef=this._dialog.open(AddMessageComponent);
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getFileList();
        }
      }
    });
  }
  getFileList(){
    this._FileService.getFileList().subscribe({
      next:(res)=>{
        console.log('Messages reçus depuis le service :', res);
        this.dataSource=new MatTableDataSource(res);
        console.log(this.messages);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:console.log,
    });
      
  } 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  DeleteFile(idMesg:number){
    this._FileService.DeleteFile(idMesg).subscribe({
      next:(res) =>{
        this._coreService.openSnackBar('Message deleted!','done');
        this.getFileList();
      },
      error:console.log,
    })

  }
  openEditFileForm(data: any){
    const dialogRef=this._dialog.open(AddMessageComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getFileList();
        }
      }
    })

  }
  sendMessage() {
    if (this.selectedUser && this.messageText.trim() !== '') {
      const newMessage: Message = {
        sender: 'Me', // Vous pouvez définir l'expéditeur comme vous le souhaitez
        message_contenu: this.messageText,
        date: new Date(),
      };

      // Ajoutez le nouveau message à la liste des messages
      this.messages.push(newMessage);

      // Effacez le champ de texte du message après l'envoi
      this.messageText = '';
    }
  }
  onSelectUser(event: any) {
    this.selectedUser = event.target.value as User;
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
          this._coreService.openSnackBar('this.selectedUser.prenom');
          
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          },
        });
      }
    }
  }
}
  

    
  



 


