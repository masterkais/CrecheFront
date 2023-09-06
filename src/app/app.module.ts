import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileComponent } from './components/File/File.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ADDFILEComponent } from './components/File/add-file/add-file.component';
import{MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { SuiviComponent } from './components/suivi/suivi.component';
import { ADDSuiviComponent } from './components/suivi/addsuivi/addsuivi.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ActivityComponent } from './components/activity/activity.component';
import { AddMessageComponent } from './components/message/add-message/add-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Home1Component,
    FileComponent,
    ADDFILEComponent,
    MessageComponent,
    SuiviComponent,
    ADDSuiviComponent,
    ActivityComponent,
    AddMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

