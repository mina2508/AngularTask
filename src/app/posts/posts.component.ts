import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../SharedClassesAndTypes/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  Posts: IPost[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((postsData) => {
      {
        postsData.filter((post: { id: any; title: any; body: any }) => {
          this.Posts.push({
            id: post.id,
            title: post.title,
            body: post.body,
          });
        });
      }
    });
  }
}
