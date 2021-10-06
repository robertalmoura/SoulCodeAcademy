import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetroParaMetro'
})
export class CentimetroParaMetroPipe implements PipeTransform {

  transform(centimetro: number) {
    let centimetroParaMetro = 100

    return centimetro / centimetroParaMetro;
  }

}
