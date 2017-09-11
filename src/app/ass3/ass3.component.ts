import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CricketerService } from '../services/cricketer.service';
import { CriketerDropDownService } from '../services/criketer-drop-down.service';
import { ICricketList, ICricketerModel } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['../ass1/ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService,CriketerDropDownService]
})
export class Ass3Component implements OnInit {
 /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  cricketerModel: ICricketerModel;
  cricketerDetail: ICricketList;
  isChanged:boolean = false;
   /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;

  /**explicitly declaring lastName */
    lastName = new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(2)]);
    firstName = new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(2)]);

  constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService,private fb: FormBuilder) { }
  
  ngOnInit() { 
    /**Using FormBuilder*/
    this.myForm = this.fb.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'favShot': ['', Validators.compose([Validators.required])],
      'playerType': [, Validators.required]
    });
    this.playerType = this._cricketerDropDown.getPlayerType();
  }
  /**Add a cricket */
  addCriketer(values) {

    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      batsmanBowler: values.playerType
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }
changed(val){
  /*console.log(val);*/
  this.isChanged = true;
}

}
