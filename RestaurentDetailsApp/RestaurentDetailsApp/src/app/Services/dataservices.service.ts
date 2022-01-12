import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {



  getDetails() {
    if (localStorage.getItem("dbR")) {
      this.users = JSON.parse(localStorage.getItem("dbR") || '')
    }

  }

  saveDetails() {
    if (this.users) {
      localStorage.setItem("dbR", JSON.stringify(this.users))
    }

  }
  users: any = {
    1000: {
      ID: 1000,
      name: 'Avg',
      email: 'avg@gmail.com',
      mobile: 6238502400,
      address: 'avgtown',
      services: 'cofee',
      display: [1000,'Avg','avg@gmail.com',6238502400,'avgtown','cofee']

    }

  }



  register(ID: any, name: any, email: any, mobile: any, address: any, services: any) {
    let db = this.users
    if (ID in db) {
      return false
    }
    else {
      db[ID] = {
        ID,
        name,
        email,
        mobile,
        address,
        services,
        display: []
      }
      db[ID].display.push({
        ID,
        name,
        email,
        mobile,
        address,
        services
      })
      this.saveDetails()
      return true
    }
  }






  constructor() {  }

  getdisplay(){
    return this.users[1000].display

  }




}


