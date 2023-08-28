import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PickListModule } from 'primeng/picklist';
import { MenubarModule } from 'primeng/menubar';
import { Repas2Component } from './repas2/repas2.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { AbonnementComponent } from './abonnement/abonnement.component';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FormFactureComponent } from './form-facture/form-facture.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFactTComponent } from './form-fact-t/form-fact-t.component';
import { FormFactMComponent } from './form-fact-m/form-fact-m.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FactureComponent } from './facture/facture.component';
import { EnfantComponent } from './enfant/enfant.component';
import { TableModule } from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EnfantService } from './enfant.service';
import { PanierComponent } from './panier/panier.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DialogComponent } from './dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Home1Component,
    RegisterComponent,
    ResetpasswordComponent,
    Repas2Component,
    AbonnementComponent,
    FormFactureComponent,
    TestComponent,
    FormFactTComponent,
    FormFactMComponent,
    PaiementComponent,
    FactureComponent,
    EnfantComponent,
    PanierComponent,
    UtilisateurComponent,
    DialogComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    PickListModule,
    MenubarModule,
    DataViewModule,
    StyleClassModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PasswordModule,
    ToastModule,
    RippleModule ,
InputTextModule,
CheckboxModule,
SliderModule,
MultiSelectModule,
ContextMenuModule,
DialogModule,
DropdownModule,
ProgressBarModule,
FileUploadModule,
ToolbarModule,
RadioButtonModule,
InputNumberModule,
 ConfirmDialogModule ,
 InputTextareaModule ,
TabViewModule,
ToastModule,
MatTooltipModule,
MatBadgeModule,
MatDialogModule,
MatIconModule







  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EnfantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
