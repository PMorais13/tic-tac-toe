import { Directive, ElementRef } from '@angular/core';
import { ButtonBase } from '../button-base/button-base';

@Directive({
  selector: '[buttonPrimary]'
})
export class ButtonPrimary extends ButtonBase {

  /**
   *
   * @param elementRef serviço angular na qual pega a referencia da div em que a diretiva for usada
   */
  constructor(public readonly elementRef: ElementRef) {
    super(elementRef, '#F2B137', '#CC8B13');
  }
}
