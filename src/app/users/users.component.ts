import { Component, OnInit } from '@angular/core';
import { IUser } from '../SharedClassesAndTypes/IUser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  Users: IUser[] = [];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersData) => {
      {
        usersData.filter((us: { name: any; username: any; email: any }) => {
          this.Users.push({
            name: us.name,
            username: us.username,
            email: us.email,
          });
        });
      }
    });
  }
}
