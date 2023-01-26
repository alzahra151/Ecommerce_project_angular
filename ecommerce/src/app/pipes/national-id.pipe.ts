import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
