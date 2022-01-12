import { Injectable } from '@angular/core';
import {Item} from "../Item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backendUrl}/items`
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);  }
}
