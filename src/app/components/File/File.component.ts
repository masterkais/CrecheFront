import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ADDFILEComponent } from './add-file/add-file.component';
import { FileService } from 'src/app/services/File.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { CoreService } from 'src/app/services/core/core.service';

@Component({
  selector: 'app-file',
  templateUrl:'./File.component.html'
  ,
  styleUrls:['./File.component.css']
})
export class FileComponent implements  OnInit {
  displayedColumns: string[] = ['idDoc','description', 'type','contenu','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _dialog:MatDialog,
    private _FileService:FileService,
    private _coreService:CoreService,
    ){}
  ngOnInit():void{
    this.getFileList();
  }
  openAddFileForm(){
    const dialogRef=this._dialog.open(ADDFILEComponent);
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
  DeleteFile(idDoc:number){
    this._FileService.DeleteFile(idDoc).subscribe({
      next:(res) =>{
        this._coreService.openSnackBar('File deleted!','done');
        this.getFileList();
      },
      error:console.log,
    })

  }
  openEditFileForm(data: any){
    const dialogRef=this._dialog.open(ADDFILEComponent,{
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
}
  

    
  


