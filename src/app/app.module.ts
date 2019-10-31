import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocComponent } from './doc/doc.component';
import {FormsModule} from "@angular/forms";
import { ReadDoneComponent } from './read-done/read-done.component';

@NgModule({
  declarations: [
    AppComponent,
    DocComponent,
    ReadDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
