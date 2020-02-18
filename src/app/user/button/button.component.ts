import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserinformationService } from 'src/app/userinformation.service';
import { UserContainer } from 'src/app/modal/user-contain';
import { from } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {

  constructor(private vector: UserinformationService) { }

  ngOnInit() {
  }

  loadData: UserContainer;

  @Output() loadDataEvent: EventEmitter<UserContainer> = new EventEmitter<UserContainer>();

  /*
   Method to Emit a Data through event 
  */

  sendMessage() {
    this.loadDataEvent.emit(this.loadData)
  }
  /*
   Method to subscribe the Data from Angular service 
  */

  OnClickLoad() {
    this.vector.onClickData().subscribe(data => {
      this.loadData = data
      this.sendMessage();
    })
  }
}




