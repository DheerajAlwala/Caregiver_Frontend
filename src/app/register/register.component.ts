import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllCareGiversService } from '../all-care-givers.service';
import { AllCareGivers } from '../AllCareGivers';
import { Caregiver } from '../Caregiver';
import { CaregiverService } from '../caregiver.service';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private allcaregivers:AllCareGiversService, private userservice: UserserviceService, private router : Router,private caregiverservice : CaregiverService) { }
  
  output : any
  model : any = {}
  hide : boolean =true;

  ngOnInit(): void {
  }

  show(){
    this.hide=!this.hide
  }
  checkUser(form : NgForm){
    this.userservice.existId(form.value.email).then((res : any)=>{
      console.log("Result",res)
      if(res){
        alert("You have already registered.Proceed to Login")
        this.router.navigate(['/login'])
      }
      else{
        this.Register(form)
      }
    })
  }
  
  

  Register(form : NgForm){
    console.log("Registration")
      this.output=this.userservice.addUser(new User(form.value.fname,form.value.lname,form.value.email,form.value.pass,form.value.address));
      
          this.output.subscribe((data:any)=>this.output=data
          );
          if(this.output!=null){
            alert("Successfully Registered!!!!")
            this.caregiverservice.addUser(new Caregiver(form.value.email,"false","")).subscribe((data:any)=>{
              console.log(data,"hoiii")}
              )
              this.allcaregivers.addUser(new AllCareGivers(form.value.email,"false")).subscribe((data:any)=>{
                console.log(data,"hoiii")}
                )
            this.router.navigate(['/login'])
          }
          else{
            alert("Enter Correct Credentials")
            window.location.reload();
          }
    
    
  }

}
