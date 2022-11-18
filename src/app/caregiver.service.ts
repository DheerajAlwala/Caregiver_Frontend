import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Caregiver } from './Caregiver';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {

  constructor(private http:HttpClient,private cookie : CookieService) { }
  baseURL="http://localhost:8080/users";
  token = 'Bearer '+this.cookie.get('token')

  async fetchall(){
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    return await lastValueFrom(this.http.get(this.baseURL+'/fetchall',{headers}));
  }

  addUser(caregiver : Caregiver){
    return this.http.post(this.baseURL+'/addcg',caregiver);
}
fetch(email : string){
  const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
  const params=new HttpParams().set('email',email);
  return this.http.get<string>(this.baseURL+'/fetchcgById',{headers,params});
}
}
