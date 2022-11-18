import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../User';
import { firstValueFrom } from 'rxjs';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Emitter } from '../Emitter/emitter';
import { AuthRequest } from '../AuthRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserserviceService,private router : Router,private cookieservice : CookieService) { }

  ngOnInit(): void {
  }
  output : string = ''
  model : any={}

 
  Login(form : NgForm) 
  {
    this.userservice.login(new AuthRequest(form.value.email,form.value.pass)).subscribe(
      (res : any)=>{
        console.log("Login",res.token)
        if(res!=''){
            alert("Successful Login")
            this.cookieservice.set('token',res.token)
            Emitter.check.emit(true)
              this.router.navigate(['/']); 
          }
          else{
            
            alert("Invalid Username or Password");
            window.location.reload();
          }
      },
      error=>{
        console.log(error);
        alert("Invalid User")
        this.router.navigate(['/register'])
      }
    );
  }

}
