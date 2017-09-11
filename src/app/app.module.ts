import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.route';
import { AppComponent } from './app.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';
import { CricketerComponent } from './ass1/cricketer/cricketer.component';
import { CricketerAss2Component } from './ass2/cricketer-ass2/cricketer-ass2.component';
import { CricketerAss3Component } from './ass3/cricketer-ass3/cricketer-ass3.component';
import { CricketerAss4Component } from './ass4/cricketer-ass4/cricketer-ass4.component';

/**********************************calling service from @NgModule for Ass2 **************/
import { CricketerDropDownAss2Service } from "./services/cricketer-drop-down-ass2.service";
import { CricketerAss2Service } from "./services/cricketer-ass2.service";
/*******************************************************************************************/

/******Calling service CricketerDropDownAss3Service from @NgModule for Assignment3************/
import { CricketerDropDownAss3Service } from "./services/cricketer-drop-down-ass3.service";
/*********************************************************************************************/
/**********************************calling service from @NgModule for Ass4 **************/
import { CricketerDropDownAss4Service } from "./services/cricketer-drop-down-ass4.service";
import { CricketerAss4Service } from "./services/cricketer-ass4.service";
import { LoggerService } from "./services/logger.service";
/*******************************************************************************************/

@NgModule({
  declarations: [
    AppComponent,
    Ass1Component,
    Ass2Component,
    Ass3Component,
    Ass4Component,
    CricketerComponent,
    CricketerAss2Component,
    CricketerAss3Component,
    CricketerAss4Component
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CricketerDropDownAss2Service,
              CricketerAss2Service,
              CricketerDropDownAss3Service,
              CricketerAss4Service,
              LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
