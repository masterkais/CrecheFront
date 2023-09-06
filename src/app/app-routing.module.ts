import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { Repas2Component } from './repas2/repas2.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { FormFactureComponent } from './form-facture/form-facture.component';
import { TestComponent } from './test/test.component';
import { FormFactMComponent } from './form-fact-m/form-fact-m.component';
import { FormFactTComponent } from './form-fact-t/form-fact-t.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FactureComponent } from './facture/facture.component';
import { EnfantComponent } from './enfant/enfant.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },



  {
    path: 'home1', component: Home1Component,
    children: [
      { path: 'repas2', component: Repas2Component },
      { path: 'abonnement', component: AbonnementComponent },
      { path: 'form-facture', component: FormFactureComponent },
      { path: 'test', component: TestComponent },
      { path: 'form-factM', component: FormFactMComponent },
      { path: 'form-factT', component: FormFactTComponent },
      { path: 'payement', component: PaiementComponent },
      { path: 'facture', component: FactureComponent },
      { path: 'enfant', component: EnfantComponent},
      












    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
