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
  register = ['Jack', 'Tom', 'Joy'];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addItem(newItem: string) {
    this.register.push(newItem);
  }

}
