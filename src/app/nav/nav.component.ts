import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Emitter } from '../Emitter/emitter';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private cookieservice : CookieService,private router : Router,private http:UserserviceService) {

 
   }
  flag : boolean = false
  name : string = ''
  searchid : string = ''
  email : string = ''

  ngOnInit(): void {
      Emitter.check.subscribe((auth : boolean)=>{
          this.flag=auth
          if(this.flag){
            this.http.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
              console.log("Nav",res)
              this.http.fetch(res).subscribe(
                (res : any)=>{
                  
                  this.name=res.fname+' '+res.lname;
                  console.log("Nav",this.name)
                }
              );
              
            })
            
            
          }
      });
      
      
  }

  search(){
    Emitter.search.emit(this.searchid)
    this.router.navigate(['/search'])
  }

  logout(){
    this.cookieservice.delete('token')
    Emitter.check.emit(false)
    this.name='name'
    this.router.navigate(['/login'])
    

  }
}
