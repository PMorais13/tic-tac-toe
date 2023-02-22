import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ButtonsDirective } from 'src/app/shared/buttons/button.module';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsDirective,
    SelectRoutingModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule { }
