import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Emitter } from '../Emitter/emitter';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http : UserserviceService,private cookieservice:CookieService) { }

  cfname: string = ''
  clname : string = ''
  caddress : string = ''
  editflag : boolean = false
  name : string = ''
  email : string = ''
  address : string = ''
  temail : string = ''

  ngOnInit(): void {
    Emitter.check.emit(true)
    this.http.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
      
      this.http.fetch(res).subscribe(
        (res : any)=>{
          if(res!=null){
          this.name=res.fname+' '+res.lname
          this.email=res.email
          this.address=res.address
          }
          
        }
      );
    })
    
  }

  edit(){
    this.editflag=!this.editflag

  }

  save(){
    
  }
}
