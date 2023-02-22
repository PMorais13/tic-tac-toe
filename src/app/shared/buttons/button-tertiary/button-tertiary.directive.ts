import { Directive, ElementRef } from '@angular/core';
import { ButtonBase } from '../button-base/button-base';

@Directive({
  selector: '[buttonTertiary]'
})
export class ButtonTertiary extends ButtonBase {

  constructor(public readonly elementRef: ElementRef) {
    super(elementRef, '#DBE8ED', '#6B8997')
  }

}
