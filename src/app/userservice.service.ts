import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { AuthRequest } from './AuthRequest';
import { User } from './User';
 
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private service:HttpClient,private cookie : CookieService) { 

  }

  baseURL="http://localhost:8080/users";
  token = 'Bearer '+this.cookie.get('token')
  
  
  addUser(user : User){
      return this.service.post(this.baseURL+"/addUser",user);
  }

  async existId(email:string){
    const params=new HttpParams().set('email',email);
    return await lastValueFrom(this.service.get<string>(this.baseURL+'/existId',{params}));
  }

  async fetchall(){
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    return await lastValueFrom(this.service.get(this.baseURL+'/searchall',{headers}),);
  }
  
  fetch(email : string){
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    const params=new HttpParams().set('email',email);
    return this.service.get(this.baseURL+'/findById',{headers,params});
  }
 
  login(auth : AuthRequest) 
  {
    return this.service.post(this.baseURL+'/login',auth);
  }

  fetchEmail(token : string) 
  {
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    const params=new HttpParams().set('token',token); 
    return this.service.get<string>(this.baseURL+'/fetchEmail',{headers,params,responseType: 'text' as 'json'});
  }
}
