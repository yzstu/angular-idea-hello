import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
