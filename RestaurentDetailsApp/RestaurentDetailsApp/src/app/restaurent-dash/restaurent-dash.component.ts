import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { DataservicesService } from '../Services/dataservices.service';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {
  displays:any;


  

  registerForm=this.fb.group({
    ID:['',[Validators.required, Validators.pattern('[0-9 ]*')]],
    name:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required, Validators.pattern('[a-zA-Z@. ]*')]],
    mobile:['',[Validators.required, Validators.pattern('[0-9 ]*')]],
    address:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    services:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]]


  })

  constructor( private fb:FormBuilder, private db:DataservicesService) {
    this.displays=this.db.getdisplay();
    console.log(this.displays);
    
   }

  ngOnInit(): void {
  }
  



  register() {
    
    console.log(this.registerForm);
    if (this.registerForm.valid) {


      var ID = this.registerForm.value.ID;
      var name = this.registerForm.value.name;
      var email = this.registerForm.value.email;
      var mobile = this.registerForm.value.mobile;
      var address = this.registerForm.value.address;
      var services = this.registerForm.value.services;

      let result = this.db.register(ID,name,email,mobile,address,services)

      if (result) {
        alert("Data Registered Successfully......")
        
      }
      else {
        alert("Account already exit !!!!!!!")
      }

    }
    else{
      alert("Invalid Form")
    }



  }






}










/////////////////////////////////
// import { jsDocComment, ThisReceiver } from '@angular/compiler';
// import { Injectable } from '@angular/core';
// import { flatMap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService {
//   currentUserName:any;
//   currentAccountNo:any


//   users: any = {
//     1000: {
//       acno: 1000,
//       uname: "n1",
//       password: 1000,
//       balance: 5000,
//       transaction:[]
//     },
//     1001: {
//       acno: 1001,
//       uname: "n2",
//       password: 1001,
//       balance: 5000,
//       transaction:[]
//     },

//     1002: {
//       acno: 1002,
//       uname: "n3",
//       password: 1002,
//       balance: 5000,
//       transaction:[]
//     }


//   }

//   constructor() { 
//     this.getDetails();
//   }



//   getDetails(){
//     if(localStorage.getItem("db"))
//     {
//       this.users=JSON.parse(localStorage.getItem("db")||'')
//     }

//     if(localStorage.getItem("cuser"))
//     {
//       this.currentUserName=JSON.parse(localStorage.getItem("cuser")||'')
//     }
//     if(localStorage.getItem("cacno"))
//     {
//       this.currentAccountNo=JSON.parse(localStorage.getItem("cacno")||'')
//     }
   
//   }

//   saveDetails(){
//     if(this.users){
//       localStorage.setItem("db",JSON.stringify(this.users))
//     }
//     if(this.currentUserName){
//       localStorage.setItem("cuser",JSON.stringify(this.currentUserName))

//     }
//     if(this.currentAccountNo){
//       localStorage.setItem("cacno",JSON.stringify(this.currentAccountNo))

//     }
//   }

//   register(acno: any, password: any, uname: any) {
//     let db = this.users
//     if (acno in db) {
//       return false
//     }
//     else {
//       db[acno] = {
//         acno,
//         uname,
//         password,
//         balance: 0,
//         transaction:[]
//       }
//       this.saveDetails()
//       return true
//     }
//   } 

//   login(acno1: any, password1: any) {
//     let database = this.users
//     if (acno1 in database) {
//       if (password1 == database[acno1]["password"]) {
//         this.currentUserName=database[acno1].uname;
//         this.currentAccountNo=acno1;
//         this.saveDetails()
//         return true
//       }
//       else {
//         alert("Incorrect Password")
//         return false
//       }
//     }
//     else {
//       alert("Invalid Account Number")
//       return false
//     }
//   }

//   deposit(acno: any, password: any, amt: any) {
//     var amount = parseInt(amt)
//     let db = this.users;

//     if (acno in db) {
//       if (password == db[acno]["password"]) {
//         db[acno]["balance"] = db[acno]["balance"] + amount
//         db[acno].transaction.push({
//           amount:amount,
//           type:"CREDIT"
//         })
//         this.saveDetails();
//         return db[acno]["balance"]
//       }
//       else {
//         alert("Incorrect Password")
//         return false
//       }

//     }
//     else {
//       alert("Account does not exit!!!!!!")
//       return false
//     }
//   }

//   withdraw(acno: any, password: any, amt: any) {
//     var amount = parseInt(amt);
//     let db = this.users;
//     if (acno in db) {
//       if (password == db[acno]["password"]) {
//         var bal = db[acno]["balance"]
//         if (bal >=amount) {
//           db[acno]["balance"] = db[acno]["balance"] - amount
//           db[acno].transaction.push({
//             amount:amount,
//             type:"DEBIT"
//           })
          
//           this.saveDetails();
//           return db[acno]["balance"];

//         }
//         else {
//           alert("Insufficient Balance")
//           return false
//         }

//       }
//       else {
//         alert("Invalid Password")
//       }

//     }
//     else {
//       alert("Account No doesnot Exit!!!!!!")
//     }

//   }


//   balance(acno:any){
//     let db=this.users;
//     if(acno in db){
//       var bal= db[this.currentAccountNo]["balance"]
//       return bal;
//     }

  

//   }

//   getTransaction(){
//     console.log(this.users[this.currentAccountNo].transaction);
    
//     return this.users[this.currentAccountNo].transaction;
//   }


// }
///////////////////////////////////////////////////////////////////