import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CounterService} from "../service/counter.service";

@Component({
  selector: 'app-length-counter',
  templateUrl: './length-counter.component.html',
  styleUrls: ['./length-counter.component.css']
})
export class LengthCounterComponent implements OnInit {

  color: string = "black"
  maxCharacters: number = 255;
  remainingCharacters: number = this.maxCharacters;

  constructor(
    private counterService: CounterService
  ) {

  }

  ngOnInit(): void {
    this.updateRemainingCharacterCount();
  }

  updateRemainingCharacterCount(){
    this.counterService.getCurrentCharacterUsedCount().subscribe(
        (currentCharacterUsedCount: number) => {
        this.remainingCharacters =
          Math.max(0, this.maxCharacters - currentCharacterUsedCount);
          if(this.remainingCharacters >= 0){
            this.color = "black";
          } else {
            this.color = "red";
          }
          console.log('LC Component: ' + this.remainingCharacters)
      }
    );
  }
}
