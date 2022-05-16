import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  topics = ['Facebook', 'Twitter', 'Google'];
  userModel: User = new User('', '', '', '', '');

  saveData() {
    console.log(this.userModel);
  }
  ngOnInit(): void {}
}
