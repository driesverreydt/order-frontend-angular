import { NgModule } from '@angular/core';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { NameFilterPipe } from './pipe/name-filter.pipe';



@NgModule({
  declarations: [
    ItemOverviewComponent,
    NameFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ItemModule { }
