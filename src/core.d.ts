import { Base as StatusBase } from "./status";

type Version = "1.1"

declare class Config {
  token: string;
  secret: string;

  constructor(token: string, secret: string)
}

declare class SwitchbotRequester {
  #token: string;
  #secret: string;
  readonly #baseURL: string;

  constructor(config: Config);

  ___warn(...msg: string[]): void;

  #setTokenSecret(val: Config);
  get #header(): {Authorication: string, sign: string, nonce: string, t: number}

  #request(version: Version, method: "POST" | "GET", url: string, rawBody: any): Promise<any>;

  ___request_get(version: Version, url: string): Promise<any>;
  ___request_post(version: Version, url: string, body: any): Promise<any>;
}

interface CommandArgment {
  command: string,
  parameter?: string,
  commandType?: string
}
interface CommandResponse {
  statusCode: number,
  body: any,
  message: string
}
declare class SwitchbotProduct extends SwitchbotRequester {
  ___deviceId: string;
  
  constructor(config: Config, deviceId: string);
  ___sendCommand({command, parameter, commandType}: CommandArgment): Promise<CommandResponse>;
}

declare class SwitchbotBasic extends SwitchbotProduct {
  getStatus(): Promise<StatusBase>;
}

declare class IR_Base extends SwitchbotProduct {
  sendCustomCommand(name: string): Promise<CommandResponse>;
}

export { SwitchbotBasic, SwitchbotProduct, IR_Base, Config, SwitchbotRequester, type CommandArgment, type CommandResponse };