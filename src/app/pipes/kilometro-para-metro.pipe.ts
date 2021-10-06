import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometroParaMetro'
})
export class KilometroParaMetroPipe implements PipeTransform {

  transform(kilometro: number) {
    let kilometroParaMetro = 1000

    return kilometro * kilometroParaMetro;
  }

}
