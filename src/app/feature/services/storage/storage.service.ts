import { Injectable } from "@angular/core";
import { TYPEMASK } from "src/app/enum/type-mask.enum";
import { TYPEPLAYER } from "src/app/enum/type-player.enum";
import { InfoInitGame } from "../../interfaces/info-init-game.interface";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _infoInitGame: InfoInitGame = {
    typePlayer: TYPEPLAYER.none,
    typeMask: TYPEMASK.none
  }

  /**
   * retorna as informações do game
   */
  public get infoGame(): InfoInitGame {
    return this._infoInitGame;
  }

 /**
  * salva as informações que serão usadas no game
  * @param info as infos que serão salvas
  */
  public setInfoGame(info: InfoInitGame): void {
    this._infoInitGame = info;
  }
}
