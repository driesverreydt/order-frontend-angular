import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../Item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  private _title!: string;
  items: Item[] = [];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this._title = 'Items';
    this.getItems();
  }

  get title(): string {
    return this._title;
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
}
