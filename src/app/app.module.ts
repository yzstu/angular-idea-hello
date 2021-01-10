import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BlogComponent } from './blog/blog.component';
import { BlogChildComponent } from './blog/blog-child/blog-child.component';
import {RouterModule} from '@angular/router';
import { BlogParentComponent } from './blog/blog-parent/blog-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BlogComponent,
    BlogChildComponent,
    BlogParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
