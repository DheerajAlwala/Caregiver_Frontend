import { Host, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SerachidComponent } from './serachid/serachid.component';
import { CaregiverComponent } from './caregiver/caregiver.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    SerachidComponent,
    CaregiverComponent,
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
