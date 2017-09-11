import { Injectable } from '@angular/core';
import { LogInterface } from "../interface/logger";

export class LoggerService{
  public debug(msg: string, ...suportingDetails: any[]):void{
    this.emitLogMessage("info", msg, suportingDetails);
  };
  public warn(msg: string, ...suportingDetails: any[]):void{
    this.emitLogMessage("warn", msg, suportingDetails);
  };
  public error(msg: string, ...suportingDetails: any[]):void{
    this.emitLogMessage("error", msg, suportingDetails);
  };
  public info(msg: string, ...suportingDetails: any[]):void{
    this.emitLogMessage("info", msg, suportingDetails);
  };

  private emitLogMessage(msgType: "debug" | "info" | "warn" | "error", msg: string, supportingDetail: any[]) {
    if (supportingDetail.length > 0) {
      console[msgType](msg, supportingDetail);
    } else {
      console[msgType](msg);
    }
  }
}
