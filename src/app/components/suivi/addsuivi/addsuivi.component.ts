import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuiviService } from 'src/app/services/suivi.service';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core'; 
import { CoreService } from 'src/app/services/core/core.service';
import { HttpClient } from '@angular/common/http';
import { SuiviModel } from 'src/app/models/suivi';
import { Enfant } from 'src/app/models/enfant';
import { EnfantService } from 'src/app/services/enfant.service';
@Component({
  selector: 'app-addsuivi',
  templateUrl: './addsuivi.component.html',
  styleUrls: ['./addsuivi.component.css']
})
export class ADDSuiviComponent implements OnInit{
  nomenfant:string[]=[
    'Maram',
    'Dhia',
    'Salmen',
    'Anas',
  ];
  repas:string[]=[
    'Pizza',
    'Humberger',
    'Tacos',
    'Sandwich',
  ]
  selectedEnfant: Enfant | null = null;
  enfants: Enfant[] = [];
  
   
selectUser(enfant: Enfant) {
  this.selectedEnfant = enfant;
}
onSelectEnfant(event: any) {
  this.selectedEnfant = event.target.value as Enfant;
}
  SuiviForm:FormGroup;
  suivi:any;
  getSuivi(event:any){
    this.suivi=event.target.suivis[0];
    console.log('suivi',this.suivi);
  }
  submitData(){
    let formData=new FormData();
    formData.set("suivi",this.suivi)
    this.http.post("http://localhost:8082/api/document",formData)
    .subscribe((response) =>{});

  }
public Suivi:SuiviModel;
constructor(
  private enfantService: EnfantService,
  private http:HttpClient,
  private _fb:FormBuilder,
  private _Suiviservice:SuiviService,
  private _dialogRef:MatDialogRef<ADDSuiviComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private _coreService:CoreService
){
  this.Suivi=new SuiviModel(),
  this.SuiviForm=this._fb.group({
   idSuiv:'',
   nomenfant:'',
   pointageArrive:'',
   pointageDepart:'',
   repas:''
  
  });
 }
 ngOnInit():void{
  this.SuiviForm.patchValue(this.data);
  this.enfantService.getAllEnfant().subscribe((enfants: Enfant[]) => {
    this.enfants= enfants;
  });
 }
onFormSubmit(){
  if(this.SuiviForm.valid){
    if(this.data){
      this._Suiviservice.UpdateSuivi(this.data.idSuiv,this.SuiviForm.value).subscribe({
        next:(val:any)=>{
          this._coreService.openSnackBar('Suivi updated');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        },
      })
    }
    else{
      this._Suiviservice.addSuivi(this.SuiviForm.value).subscribe({
        next:(val:any)=>{
          this._coreService.openSnackBar('Suivi added');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        },
      })
    }
  }

}
}

