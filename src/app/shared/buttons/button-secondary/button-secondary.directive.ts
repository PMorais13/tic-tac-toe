import { Directive, ElementRef } from '@angular/core';
import { ButtonBase } from '../button-base/button-base';

@Directive({
  selector: '[buttonSecondary]'
})
export class ButtonSecondary extends ButtonBase{

  /**
   *
   * @param elementRef serviço angular na qual pega a referencia da div em que a diretiva for usada
   */
  constructor(public readonly elementRef: ElementRef) {
    super(elementRef, '#31C3BD', '#118C87')
  }
}
