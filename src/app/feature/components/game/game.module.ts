import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { ScoreComponent } from './score/score.component';
import { GameRoutingModule } from './select-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [GameComponent, ScoreComponent],
  exports: [GameComponent]
})
export class GameModule { }
