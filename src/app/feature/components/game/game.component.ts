import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoute } from 'src/app/enum/routes.enum';
import { Score } from '../../interfaces/score.interface';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public listScore: Array<Score> = [
    {
      label: 'x',
      score: 10,
      backgroundColor: '#31C3BD'
    },
    {
      label: 'ties',
      score: 30,
      backgroundColor: '#A8BFC9'

    },
    {
      label: 'o (CPU)',
      score: 5,
      backgroundColor: '#F2B137'

    },
  ]

  constructor(private readonly storageService: StorageService, private readonly router: Router) { }

  public ngOnInit(): void {
    if(!this.storageService.infoGame.typeMask) {
      void this.router.navigate([PageRoute.start])
    }
    console.log('infos', this.storageService.infoGame);

  }

}
