import { Component, OnInit } from '@angular/core';
import { Emitter } from '../Emitter/emitter';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-serachid',
  templateUrl: './serachid.component.html',
  styleUrls: ['./serachid.component.css']
})
export class SerachidComponent implements OnInit {

  constructor(private http:UserserviceService) { }

  id:string=''
  
  fname:string=''
  lname:string=''
  email:string=''
  address:string=''
  table:boolean=true
  
  ngOnInit(): void {
    Emitter.check.emit(true);
  }

  search(){
    
    this.http.fetch(this.id).subscribe(
      (res : any)=>{
        if(res!=null){
          this.fname=res.fname;
          this.lname=res.lname;
          this.email=res.email;
          this.address=res.address
          this.table=true
        }
        else{
          this.table=false
        }
      },
      (error)=>{
          this.table=false
          console.log("invalid",error)
      }
    );
  }

}
