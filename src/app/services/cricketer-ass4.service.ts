import { Injectable } from '@angular/core';
import { ICricketList, ICricketListAss4 } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { LoggerService } from "./logger.service";
@Injectable()
export class CricketerAss4Service {

   cricketersList: ICricketListAss4[] = [];
   constructor(private _logger: LoggerService) { }

    /** Add cricketer in the array List. */
    addCricketer(cricketerDetail: ICricketListAss4) {
      this.cricketersList.unshift(cricketerDetail);
      /*calling logger for adding data*/
      this._logger.info("Adding Data",cricketerDetail);
    }

    /**Get the cricket list from the array. */
    getCricket(): ICricketListAss4[] {
      /*calling logger for retrieving data*/
      this._logger.info("Retrieving Data",this.cricketersList);
      return this.cricketersList;
    }

}
