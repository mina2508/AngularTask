import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpclient: HttpClient) {}
  getUsers(): Observable<any> {
    return this.httpclient.get(this.url);
  }
}
