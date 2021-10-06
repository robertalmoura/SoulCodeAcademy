import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metroParaKilometro'
})
export class MetroParaKilometroPipe implements PipeTransform {

  transform(metro: number) {
    let metroParaKilometro= 1000

    return metro / metroParaKilometro;
  }

}
