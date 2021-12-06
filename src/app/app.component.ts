import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
  password:string="";
  confirmPassword:string="";
  gender:string="";
  country:string="";
  msg:string="";
  register(){
    this.msg="Registration Successfully Completed...!";
  }
}
