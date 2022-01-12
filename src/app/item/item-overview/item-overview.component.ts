import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  private _title!: string;

  constructor() { }

  ngOnInit(): void {
    this._title = 'Items';
  }

  get title(): string {
    return this._title;
  }

}
