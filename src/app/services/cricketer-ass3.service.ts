import { Injectable } from '@angular/core';
import { ICricketList } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
@Injectable()
export class CricketerAss3Service {

   cricketersList: ICricketList[] = [];

    /** Add cricketer in the array List. */
    addCricketer(cricketerDetail: ICricketList) {
      this.cricketersList.unshift(cricketerDetail);
    }

    /**Get the cricket list from the array. */
    getCricket(): ICricketList[] {
      return this.cricketersList;
    }

}
