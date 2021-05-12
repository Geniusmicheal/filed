import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './registration/ads/ads.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './registration/user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: RegistrationComponent, children:[
    {path: 'adsdetail', component: AdsComponent},
    {path: 'userdetail', component: UserComponent},
  ]},

 
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
