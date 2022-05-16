import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpclient: HttpClient) {}
  getPosts(): Observable<any> {
    return this.httpclient.get(this.url);
  }
}
