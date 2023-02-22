import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  private winningRows: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {}

  /**
   * checa a cada jogada para ver se houve um vencedor
   * @param movesPlayer jogadas de cada jogador
   * @returns se houve vencedor
   */
  public checkWinner(movesPlayer: Array<number>): boolean {
    let winner = false;
    let count = 0;
    this.winningRows.map((moves) => {
      moves.map((move) => {
        if (movesPlayer.includes(move)) {
          count = count + 1;
        }
      });
      count >= 3 ? winner = true : count = 0;
    });

    return winner;
  }
}
