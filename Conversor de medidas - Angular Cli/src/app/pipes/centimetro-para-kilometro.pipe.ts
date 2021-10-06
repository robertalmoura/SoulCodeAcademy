import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetroParaKilometro' //Esse nome, será chamado no html para que a conta no transform seja realizada
})
export class CentimetroParaKilometroPipe implements PipeTransform {

  transform(centimetro: number) {
    let centimetroParaKilometro = 100000 // dou valor ao name

    return centimetro / centimetroParaKilometro; // calculo o name
  }

}
