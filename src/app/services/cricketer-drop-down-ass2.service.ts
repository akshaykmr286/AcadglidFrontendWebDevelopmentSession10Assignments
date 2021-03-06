import { Injectable } from '@angular/core';
import { IPlayerType } from '../interface/player-type';
@Injectable()
export class CricketerDropDownAss2Service {

 playerType: IPlayerType[] = [];

  /** Get the player Type */
  getPlayerType() {
    return this.playerType = [{
      id: 1,
      type: 'Batsman'
    },
    {
      id: 1,
      type: 'Bowler'
    }, {
      id: 1,
      type: 'Wicket Keeper'
    }
    ];
  }
}
