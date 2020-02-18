import { Component, OnInit, Input } from '@angular/core';
import { UserContainer } from '../modal/user-contain';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  userData: UserContainer ;
  currentUser : UserContainer ;
  
  ngOnInit() {
  }

  receiveMessage(data:UserContainer) {
   
    this.userData =data;
    
  }

  receiveMessageUserName(data:UserContainer) {
    
    this.currentUser =data;
   
    console.log(this.currentUser)
  }

}
