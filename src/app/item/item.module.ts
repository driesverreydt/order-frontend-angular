import { NgModule } from '@angular/core';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NameFilterPipe } from './pipe/name-filter.pipe';
import { CreateItemComponent } from './create-item/create-item.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ItemOverviewComponent,
    NameFilterPipe,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ItemModule { }
