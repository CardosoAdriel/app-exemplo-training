import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raizQuadrada'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(numero: number): number {
    return Math.sqrt(numero)
  }

}
