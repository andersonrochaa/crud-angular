import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case "front-end": return "dashboard"
      case "back-end": return "computer"
      case "full-stack": return "dashboard"
    }
    return "code";
  }

}
