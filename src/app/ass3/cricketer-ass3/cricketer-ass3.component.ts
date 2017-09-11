import { Component, OnInit, Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer-ass3',
  templateUrl: './cricketer-ass3.component.html',
  styleUrls: ['./cricketer-ass3.component.css']
})
export class CricketerAss3Component implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;
  constructor() { }

  ngOnInit() {
  }
}
