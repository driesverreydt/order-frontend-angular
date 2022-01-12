import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../Item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], filter: string): Item[] {
    if(filter === undefined){
      return items;
    }
    return items.filter(item => item.name.toLowerCase().startsWith(filter.toLowerCase()));
  }

}
