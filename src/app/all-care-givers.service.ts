import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { AllCareGivers } from './AllCareGivers';

@Injectable({
  providedIn: 'root'
})
export class AllCareGiversService {

  constructor(private http:HttpClient,private cookie : CookieService) { }
  baseURL="http://localhost:8080/user/h2";
  token = 'Bearer '+this.cookie.get('token')
  async fetchall(){
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    return await lastValueFrom(this.http.get(this.baseURL+'/fetchallgivers',{headers}));
  }

  addUser(allcaregivers : AllCareGivers){
    return this.http.post('http://localhost:8080/user/h2/addallcg',allcaregivers);
  }

  fetchStatus(email : string){
    const params=new HttpParams().set('email',email);
    const headers=new HttpHeaders().set('Authorization',this.token).set('Content-Type' , 'application/json; charset=utf-8');
    return this.http.get(this.baseURL+'/fetchStatus',{headers,params});
  }
}
