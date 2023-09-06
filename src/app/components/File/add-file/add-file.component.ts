
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/services/File.service';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core'; 
import { CoreService } from 'src/app/services/core/core.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class ADDFILEComponent implements OnInit {
  document:string[]=[
    'autorisation',
    'vaccin',
    'certificat medicale',
    'facture',
  ];
  FileForm:FormGroup;
  file:any;
  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }
  submitData(){
    let formData=new FormData();
    formData.set("file",this.file)
    this.http.post("http://localhost:8082/api/document",formData)
    .subscribe((response) =>{});

  }
constructor(
  private http:HttpClient,
  private _fb:FormBuilder,
  private _Fileservice:FileService,
  private _dialogRef:MatDialogRef<ADDFILEComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private _coreService:CoreService
){
  this.FileForm=this._fb.group({
    idDoc:'',
    description:'',
    type:'',
    contenu:'',
  });
 }
 ngOnInit():void{
  this.FileForm.patchValue(this.data);
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
          this._coreService.openSnackBar('File added');
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
