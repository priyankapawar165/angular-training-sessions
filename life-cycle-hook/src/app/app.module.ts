import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildComponent } from './view-child/view-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ContentChildComponent,
    ViewChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
