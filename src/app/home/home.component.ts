import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Emitter } from '../Emitter/emitter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookieservice:CookieService) { }
  
  ngOnInit(): void {
  
    if(this.cookieservice.check('token')){
      Emitter.check.emit(true)
    }
    else{
      Emitter.check.emit(false)
    }
  }
  
}
