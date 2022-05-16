import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor() {}
  topics = ['Facebook', 'Twitter', 'Google'];
  userModel: User = new User('', '', '', '', '');

  saveData() {
    console.log(this.userModel);
  }
  ngOnInit(): void {}
}
