import { Component, OnInit } from '@angular/core';
import {RedditService} from '../reddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  posts: any;

  constructor(private service: RedditService) { }

  ngOnInit(): void {
this.searchReddit();
  }

  searchReddit(){
this.service.getData().subscribe((response)=> {
  console.log(response);
  this.posts = response.data.children;
});
  }
}
