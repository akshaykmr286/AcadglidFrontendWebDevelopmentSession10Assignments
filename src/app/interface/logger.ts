export interface LogInterface {
  debug(primaryMessage: string, ...suportingDate: any[]):void;
  warn(primaryMessage: string, ...suportingDate: any[]):void;
  error(primaryMessage: string, ...suportingDate: any[]):void;
  info(primaryMessage: string, ...suportingDate: any[]):void;
}
