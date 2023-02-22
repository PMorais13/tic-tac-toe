import { NgModule } from '@angular/core';
import { ButtonPrimary } from './button-primary/button-primary.directive';
import { ButtonSecondary } from './button-secondary/button-secondary.directive';
import { ButtonTertiary } from './button-tertiary/button-tertiary.directive';

@NgModule({
  declarations: [ButtonPrimary, ButtonSecondary, ButtonTertiary],
  exports: [ButtonPrimary, ButtonSecondary, ButtonTertiary],
})
export class ButtonsDirective {}
