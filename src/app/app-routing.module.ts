import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DocComponent} from "./doc/doc.component";
import {ReadDoneComponent} from "./read-done/read-done.component";

const routes: Routes = [
  {
    path:'readDone',component:ReadDoneComponent
  },
  {
    path:"list-doc",component:DocComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
