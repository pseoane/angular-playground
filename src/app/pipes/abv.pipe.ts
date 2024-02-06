import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv',
  standalone: true
})
export class AbvPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `Alcohol: ${value}%` ;
  }

}
