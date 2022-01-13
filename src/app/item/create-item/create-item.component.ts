import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CounterService} from "../../util/service/counter.service";
import {startWith} from "rxjs";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  private _title!: string;
  private maxDescriptionLength: number = 255;
  itemForm!: FormGroup;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router,
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this._title = 'Create Item';
    this.buildForm();
  }

  buildForm(): void {
    this.itemForm = this.formBuilder.group({
      name: new FormControl(this.name,Validators.required),
      description: new FormControl(this.description,
        [Validators.required,
          Validators.maxLength(this.maxDescriptionLength)]),
      price: new FormControl(this.price,
        [Validators.required,
          Validators.min(0)]),
      amountOfStock: new FormControl(this.amountOfStock,
        [Validators.required,
          Validators.min(0)])
    })

    this.itemForm.valueChanges
      .subscribe(data => this.onValueChanged(true,data));

    this.onValueChanged(true); // (re)set validation messages now

    this.itemForm.get('description')?.valueChanges.
      subscribe(() => this.onDescriptionChanged());
  }

  onValueChanged(dirtyCheck: boolean, data?: any, ) {
    if (!this.itemForm) { return; }
    const form = this.itemForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || !dirtyCheck) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onDescriptionChanged() {
    // @ts-ignore
    const characterUsedCount = document.getElementById('description').value.length;
    console.log('CI Component: ' + characterUsedCount)
    this.counterService.changeCharacterUsedCount(characterUsedCount);
  }

  get title(): string {
    return this._title;
  }

  get name() {
    if(this.itemForm === undefined) {
      return undefined;
    }
    return this.itemForm.get('name');
  }

  get description() {
    if(this.itemForm === undefined) {
      return undefined;
    }
    return this.itemForm.get('description');
  }

  get price() {
    if(this.itemForm === undefined) {
      return undefined;
    }
    return this.itemForm.get('price');
  }

  get amountOfStock() {
    if(this.itemForm === undefined) {
      return undefined;
    }
    return this.itemForm.get('amountOfStock');
  }

  onSubmit() {
    this.onValueChanged(false);
    if (this.itemForm.valid) {
      this.itemService.addItem(this.itemForm.value)
        .subscribe(item => {
          console.log(`Item added with name: ${item.name}`, item);
          this.router.navigate(['/items'])
            .then(_ => console.log('Navigation back to overview after submit success'));
        });
    }
  }

  formErrors: any = {
    'name': '',
    'description': '',
    'price': '',
    'amountOfStock': ''
  };

  validationMessages: any = {
    'name': {
      'required':  'Name is required.',
    },
    'description': {
      'required':   'Description is required.',
      'maxlength':  'Description cannot be more than 255 characters long.'
    },
    'price': {
      'required':   'Price is required.',
      'min':        'Price has to be positive.'
    },
    'amountOfStock': {
      'required':   'AmountOfStock is required.',
      'min':        'AmountOfStock has to be positive.'
    }
  };
}
