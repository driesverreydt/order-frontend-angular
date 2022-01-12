import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  private _title!: string;
  itemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: ''
  })

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._title = 'Create Item';
  }

  get title(): string {
    return this._title;
  }

  onSubmit(){
    this.itemService.addItem(this.itemForm.value)
      .subscribe(item => {
        console.log(`Item added with name: ${item.name}`, item);
        this.router.navigate(['/items'])
            .then(_ => console.log('Navigation back to overview after submit success'));
      });
  }
}
