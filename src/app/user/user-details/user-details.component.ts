import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { UserContainer } from 'src/app/modal/user-contain';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
 /* 
 selected user details taken as input and shown in template
 */
  @Input() userDetailData : UserContainer ;
   

  constructor() { }

  ngOnInit() {
   
  }

}
