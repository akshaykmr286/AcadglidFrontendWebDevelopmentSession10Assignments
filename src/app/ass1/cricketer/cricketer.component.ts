import { Component, OnInit, Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer',
  templateUrl: './cricketer.component.html',
  styleUrls: ['./cricketer.component.css']
})
export class CricketerComponent implements OnInit {

   /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;
  constructor() { }

  ngOnInit() {
  }

}
