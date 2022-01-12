import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="you are a perfect banking partner"
ab=100
  accno=""
  adno=""
  
  
  pwd=""
 

  users:any = {
    1000:{
      acno:1000,
      uname:"n1",
      password:1000,
      balance:5000
    },
    1001:{
      acno:1001,
      uname:"n2",
      password:1001,
      balance:5000
    },

    1002:{
      acno:1002,
      uname:"n3",
      password:1002,
      balance:5000
    }


  }

  constructor(private router1:Router) { }

  ngOnInit(): void {
  }


  alert1(){
    alert("hai")
  }


  // login(){
   

  //   var acno=this.acno;
  //   var password=this.pwd;
  //   let database=this.users
    
  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("invalid account no")
  //   }
  // }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }

  // pwdChange(event:any){
  //   this.pwd=event.target.value
  //   console.log(this.pwd)
  // }

  // login(a:any,b:any){

  //   console.log(a);
    
   

  //   var acno=a.value;
 
    
  //   var password=b.value ;
  //   let database=this.users
    
  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("invalid account no")
  //   }
  // }


  // login(){
   

  //   var acno=this.acno;
  //   var password=this.pwd;
  //   let database=this.users
    
  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")
  //       this.router1.navigateByUrl("dashboard")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("invalid account no")
  //   }
  // }
 
/////////////////////////////////

login(a:any,b:any){

  this.adno=a.value
  
 

}
}
