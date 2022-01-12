import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemOverviewComponent} from "./item/item-overview/item-overview.component";
import {CreateItemComponent} from "./item/create-item/create-item.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'create-item', component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
