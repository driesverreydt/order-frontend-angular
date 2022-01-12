import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-group',
  templateUrl: './logo-group.component.html',
  styleUrls: ['./logo-group.component.css']
})
export class LogoGroupComponent implements OnInit {

  private _title!: string;

  constructor() { }

  ngOnInit(): void {
    this._title = 'ÖRDER';
  }

  get title(): string {
    return this._title;
  }

}
