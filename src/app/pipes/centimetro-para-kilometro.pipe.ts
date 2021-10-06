import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetroParaKilometro'
})
export class CentimetroParaKilometroPipe implements PipeTransform {

  transform(centimetro: number) {
    let centimetroParaKilometro = 100000

    return centimetro / centimetroParaKilometro;
  }

}
