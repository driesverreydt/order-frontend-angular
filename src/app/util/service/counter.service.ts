import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentCharacterUsedCount = this.counterSource.asObservable();

  constructor() { }

  changeCharacterUsedCount(characterUsedCount: number) {
    this.counterSource.next(characterUsedCount);
    console.log('CounterService: ' + characterUsedCount)
  }

  getCurrentCharacterUsedCount(): Observable<number> {
    return this.currentCharacterUsedCount;
  }
}
