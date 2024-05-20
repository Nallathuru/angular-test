import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loki.component.html',
  styleUrl: './loki.component.css',
})
export class LokiComponent {
  // Data biding- For data binding we always use mostache type braces/flower braces

userList = [
    {
      id: 1,
      firstname: 'Lokesh',
      lastname: 'Nallathuru',
      age: 28,
      gender: 'Male',
    },
    
    {
      id: 2,
      firstname: 'Suresh',
      lastname: 'Nallathuru',
      age: 18,
      gender: 'Male',
    },
    {
      id: 3,
      firstname: 'Ramesh',
      lastname: 'Nallathuru',
      age: 38,
      gender: 'Male',
    },
  ];
  userid: number = 49;
  userstatus: any = 'offline';
  username: any = '';
  isusercreated = false;
  users = ['user1', 'user2'];

  getuserstatus() {
    return this.userstatus;
  }
  // Property binding - We are binding a property using Square braces,In Angular, property binding is a way to set a property of an HTML element to a value in the component's class. It allows you to dynamically change properties of HTML elements based
  //on data or expressions in your component.// Property bindings are always in the square braces only.
  allownewuser = false;

  //event binding - if we want to perfom some action, event biding will help us to do so.
  usercreatedstatus = 'No user is created';
  updateuser = '';
  constructor() {
    setTimeout(() => {
      this.allownewuser = true;
    }, 3000);
  }
  changeusercreatedstatus() {
    this.isusercreated = true;
    this.usercreatedstatus = 'user is created';
    this.users.push(this.username);
  }
  // sending $ event in order to capture the data.
  onupdateuser(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
}
