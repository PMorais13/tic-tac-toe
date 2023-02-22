import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/feature/interfaces/score.interface';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input () public listScore!: Array<Score>;

  constructor() { }

  ngOnInit() {
  }

}
