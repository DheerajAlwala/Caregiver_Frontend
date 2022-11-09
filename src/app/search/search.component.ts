import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AllCareGiversService } from '../all-care-givers.service';
import { CaregiverService } from '../caregiver.service';
import { Emitter } from '../Emitter/emitter';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private http:UserserviceService,private cookieservice:CookieService,private caregiver : CaregiverService,private allcaregivers : AllCareGiversService) {
      
   }

   email:string=''
   list:any=[]

  ngOnInit(): void {
    Emitter.check.emit(true)
    this.http.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
      console.log("Fetch Email",res)
      this.email=res
    })
    this.fetchall()
    
  }
  fetchall(){
      this.http.fetchall().then(
        (res:any)=>{
            console.log("Fetch all",res)
            res.forEach((element : any)=> {
              this.allcaregivers.fetchStatus(element.email).subscribe((data:any)=>{
                  if(data.status=='false'){
                    element['caregiver'] = 'Available'
                  }
                  else{
                    element['caregiver']='Not Available'
                  }
              })
              
            });
            this.list=res
            console.log(this.list)
        }
      )
  }
  

}
