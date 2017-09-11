import { Component, OnInit,Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer-ass4',
  templateUrl: './cricketer-ass4.component.html',
  styleUrls: ['./cricketer-ass4.component.css']
})
export class CricketerAss4Component implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;
  constructor() { }

  ngOnInit() {
  }
}
