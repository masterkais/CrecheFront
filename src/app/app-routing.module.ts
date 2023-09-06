import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { FileComponent } from './components/File/File.component';
import { MessageComponent } from './components/message/message.component';
import { SuiviComponent } from './components/suivi/suivi.component';
import { ActivityComponent } from './components/activity/activity.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home1', component:Home1Component,children:
  [
   {path:'Document',component:FileComponent},
   {path:'Message',component:MessageComponent},
   {path:'Suivi',component:SuiviComponent},
   {path:'Activity',component:ActivityComponent},
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
