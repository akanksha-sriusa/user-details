import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserinformationService } from '/Users/akanksha/Documents/akanksha_study/Angular/Userlist-cgn/src/app/userinformation.service';
import { from } from 'rxjs';
import { UserContainer } from 'src/app/modal/user-contain';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  UserName: UserContainer;
  userName1: UserContainer;

  @Input() userNameData: UserContainer;
  constructor() { }

  ngOnInit() {
  }
 /*
  To recieve the data from parent component and display the user name 
 */
  @Output() UserNameDataEvent: EventEmitter<UserContainer> = new EventEmitter<UserContainer>();

  onNameClick(fname1, lname1, number1, email1) {

    this.userName1 = { fname: fname1, lname: lname1, number: number1, email: email1 };


    this.UserNameDataEvent.emit(this.userName1);

  }

}
