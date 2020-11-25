import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public api:ApiService, public router:Router) { }

  ngOnInit() {
  }


  login(){
  	 	this.api.post('login', {email:'gurmukhindiit@gmail.com', password: '12345678'},'').subscribe((result) => {  
        
        console.log(result);
  		this.router.navigate(['/tabs/home']);
        },
        err => {
             
        });
  }

}
