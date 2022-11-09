import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaregiverComponent } from './caregiver/caregiver.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SerachidComponent } from './serachid/serachid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component : ProfileComponent},
  { path: 'search', component: SearchComponent},
  { path: 'searchid', component: SerachidComponent },
  { path: 'caregiver', component: CaregiverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
