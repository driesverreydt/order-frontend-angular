import { NgModule } from '@angular/core';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NameFilterPipe } from './pipe/name-filter.pipe';
import { CreateItemComponent } from './create-item/create-item.component';
import {RouterModule} from "@angular/router";
import {UtilModule} from "../util/util.module";



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
    RouterModule,
    UtilModule
  ]
})
export class ItemModule { }
