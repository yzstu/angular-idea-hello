import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-child',
  templateUrl: './blog-child.component.html',
  styleUrls: ['./blog-child.component.css']
})
export class BlogChildComponent implements OnInit {

  @Input() blog: Blog;
  // tslint:disable-next-line:no-input-rename
  @Input('author') authorName: string;
  @Output() like = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addLike(value: string) {
    this.like.emit(value);
  }


}
