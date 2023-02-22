import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoute } from 'src/app/enum/routes.enum';
import { TYPEMASK } from 'src/app/enum/type-mask.enum';
import { TYPEPLAYER } from 'src/app/enum/type-player.enum';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  constructor(private readonly router: Router, private readonly storageService: StorageService) {}

  public activyX = true;

  /**
   * seta a classe quando o botão é clicado e seleciona o tipo de jogador
   * @param event evento de qual botão foi clicado
   */
  public clickButton(event: boolean): void {
    this.activyX = event
  }

  /**
   * seleciona o tipo de jogo e redireciona para a tela do game
   */
  public selectTypeGame(type: TYPEPLAYER): void {
    this.storageService.setInfoGame(
      {
        typeMask: this.activyX ? TYPEMASK.playerX : TYPEMASK.playerO,
        typePlayer: type
      }
    )
    void this.router.navigate([PageRoute.game]);
  }
}
