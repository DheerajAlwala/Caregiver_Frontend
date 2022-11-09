import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AllCareGiversService } from '../all-care-givers.service';
import { AllCareGivers } from '../AllCareGivers';
import { Caregiver } from '../Caregiver';
import { CaregiverService } from '../caregiver.service';
import { Emitter } from '../Emitter/emitter';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.css']
})
export class CaregiverComponent implements OnInit {

  constructor(private cookieservice : CookieService,private caregiverservice : CaregiverService,private allcaregiverservice : AllCareGiversService,private userservice : UserserviceService) { }
  
  flag : boolean = false
  email : string = ''
  list : any = []
  cgname : string = ''
  cgemail : string = ''
  cgaddress : string = ''
  cg : string = ''
  temail : string = ''
  tname : string = ''
  ngOnInit(): void {
    console.log("NgOnInit : ",this.flag)
    Emitter.check.emit(true)
    this.userservice.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
      console.log("Fetch Email",res)
      this.temail=res
      this.userservice.fetch(this.temail).subscribe((ele : any)=>{
        this.tname=ele.fname+" "+ele.lname
      })
      this.caregiverservice.fetch(res).subscribe((data:any)=>{
        if(data.cg1=='false'){
          this.flag=false
          this.displayTable()
        }
        else{
          this.flag=true
          this.displayDetails()
        }
      })
      
    })
    
    console.log("After fetch : ",this.flag)
  }

  displayTable(){
    const array : any = []
    console.log("Display Table")
    this.allcaregiverservice.fetchall().then((data : any)=>{
      data.forEach((ele:any) => {
        if(ele.status=='false'){
          this.userservice.fetch(ele.email).subscribe((res:any)=>{
            array.push(res)
          })
        }
      });
    })
    this.list=array
    console.log("CareGivers : ",this.list)
  }

  displayDetails(){
    console.log("In details : ",this.flag)
    console.log("Display Details")
    this.caregiverservice.fetch(this.temail).subscribe((res:any)=>{
      console.log("Result : ",res)
        if(res!=null){
        this.userservice.fetch(res.cg2).subscribe((ele : any)=>{
          console.log("Element : ",ele)
          this.cgname=ele.fname+' '+ele.lname
          this.cgemail=ele.email
          this.cgaddress=ele.address
          console.log("Name : ",this.cgname,"Email : ",this.cgemail,"Address : ",this.cgaddress)
        })
        }
    })
   
  }

  add(user : User){
    this.flag=true
    this.cg=user.email
    
    console.log("Add : ",this.flag)
    this.allcaregiverservice.addUser(new AllCareGivers(user.email,'true')).subscribe((ele:any)=>{
      console.log("Assigned : ",ele)
    })
    this.userservice.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
      this.caregiverservice.addUser(new Caregiver(res,'true',user.email)).subscribe((ele : any)=>{
        console.log("Added : ",ele)
        console.log("After reload : ",this.flag)
        window.location.reload()
      })  
    })
    
    console.log("CG",this.cg)
  }

  change(){
    this.flag=false
    console.log("Change : ",this.flag)
    this.caregiverservice.fetch(this.temail).subscribe((data:any)=>{
      console.log("Data Email : ",data.cg2)
      if(data!=null){
      this.allcaregiverservice.addUser(new AllCareGivers(data.cg2,'false')).subscribe((ele:any)=>{
        console.log("Assigned : ",ele)
      })
    }
    })
    this.userservice.fetchEmail(this.cookieservice.get('token')).subscribe((res:any)=>{
      this.caregiverservice.addUser(new Caregiver(res,'false','')).subscribe((ele : any)=>{
        console.log("Changed : ",ele)
        window.location.reload()
      })
  })
}
}
