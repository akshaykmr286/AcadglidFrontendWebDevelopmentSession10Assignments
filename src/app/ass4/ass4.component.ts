import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CricketerAss4Service } from '../services/cricketer-ass4.service';
import { CriketerDropDownService } from '../services/criketer-drop-down.service';
import { ICricketList, ICricketerModel, ICricketerModelAss4 ,ICricketListAss4} from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ass4',
  templateUrl: './ass4.component.html',
  styleUrls: ['../ass1/ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerAss4Service,CriketerDropDownService]

})
export class Ass4Component implements OnInit {
  /**Public variable */
  cricketersArray: ICricketListAss4[] = [];
  playerType: IPlayerType[] = [];

  cricketerModel: ICricketerModelAss4;
  cricketerDetail: ICricketListAss4;
  isChanged:boolean = false;
   /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;

  /**explicitly declaring lastName */
    lastName = new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(2)]);
    firstName = new FormControl('', [Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(2)]);
    /*custom validater is added*/
    batch = new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.minLength(2),this.customValidator]);
  constructor(private router:Router,private _cricketService: CricketerAss4Service, private _cricketerDropDown: CriketerDropDownService,private fb: FormBuilder) { }
  
  ngOnInit() { 
    /**Using FormBuilder*/
    this.myForm = this.fb.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'favShot': ['', Validators.compose([Validators.required])],
      'playerType': [, Validators.required],
      'batch':  this.batch
    });
    this.playerType = this._cricketerDropDown.getPlayerType();
  }
  /**Add a cricket */
  addCriketer(values) {

    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      batsmanBowler: values.playerType,
      batch: values.batch
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }
/*changed(val){
  this.isChanged = true;
}*/

/*Defining custom validator*/
customValidator(fieldControl: FormControl){
 let lngth = fieldControl.value.length;
 return lngth === 3 ? null : {notValid:true};
}
}
