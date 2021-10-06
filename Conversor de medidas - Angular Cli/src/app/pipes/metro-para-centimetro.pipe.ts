import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metroParaCentimetro'
})
export class MetroParaCentimetroPipe implements PipeTransform {

  transform(metro: number) {
    let metroParaCentimetro = 100

    return metro * metroParaCentimetro;
  }
}

