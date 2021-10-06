import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometroParaCentimetro'
})
export class KilometroParaCentimetroPipe implements PipeTransform {

  transform(kilometro: number) {
    let kilometroParaCentimetro = 100000

    return kilometro * kilometroParaCentimetro;
  }

}
