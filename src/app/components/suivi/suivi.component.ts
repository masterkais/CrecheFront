import { Component,OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core/core.service';
import { ADDSuiviComponent } from './addsuivi/addsuivi.component';
import { SuiviService } from 'src/app/services/suivi.service';
import { HttpClient } from '@angular/common/http';
import { Enfant } from 'src/app/models/enfant';
import { EnfantService } from 'src/app/services/enfant.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit{
  displayedColumns: string[] = ['idSuiv','nomenfant','pointageArrive','pointageDepart','repas','Action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  enfants: Enfant[] = [];
  constructor(
    private enfantService:EnfantService,
    private httpClient:HttpClient,
    private _dialog:MatDialog,
    private _SuiviService:SuiviService,
    private _coreService:CoreService,
    ){}
  ngOnInit():void{
    this.getSuiviList();
    this.enfantService.getAllEnfant().subscribe((enfants: Enfant[]) => {
      console.log(enfants); // Vérifiez si les données des enfants sont correctement récupérées
      this.enfants = enfants;
    });
  }
  openAddFileForm(){
    const dialogRef=this._dialog.open(ADDSuiviComponent);
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getSuiviList();
        }
      }
    });
  }
  getSuiviList(){
    this._SuiviService.getSuiviList().subscribe({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
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
  deleteFile (idSuiv:number){
    this._SuiviService.DeleteSuivi(idSuiv).subscribe({
      next:(res:any) =>{
        this._coreService.openSnackBar('Suivi deleted','done');
        this.getSuiviList();
      },
      error:console.log,
    })

  }
  openEditFileForm(data: any){
    const dialogRef=this._dialog.open(ADDSuiviComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getSuiviList();
        }
      }
    })

  }
}
