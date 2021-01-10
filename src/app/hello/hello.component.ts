import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    this.logIt(`OnInit`);
  }

  // tslint:disable-next-line:typedef
  logIt(msg: string) {
    console.log(msg);
  }

}
