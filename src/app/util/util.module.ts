import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LengthCounterComponent} from "./length-counter/length-counter.component";



@NgModule({
  declarations: [
    LengthCounterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LengthCounterComponent,
  ]
})
export class UtilModule { }
