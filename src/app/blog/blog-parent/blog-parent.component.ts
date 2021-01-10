import { Component, OnInit } from '@angular/core';
import {BLOG} from '../blog';

@Component({
  selector: 'app-blog-parent',
  templateUrl: './blog-parent.component.html',
  styleUrls: ['./blog-parent.component.css']
})
export class BlogParentComponent implements OnInit {

  blogs = BLOG;
  author = 'Baldwin';

  constructor() { }

  ngOnInit(): void {
  }

}
