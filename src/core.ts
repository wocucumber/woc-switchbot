import {createHmac, randomUUID} from "crypto";
import type { SwitchbotDevicesResponse } from "./deviceGetter.js";

type API_Version = "1.1";
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface ResponseBase {
  statusCode: number,
  message: string,
  body: any
}

export class Config {
  private _token: string;
  get token(): string {
    return this._token;
  }
  private _secret: string;
  get secret(): string {
    return this._secret;
  }


  constructor(token: string, secret: string) {
    if (!token) throw new Error("Token is required.");
    if (!secret) throw new Error("Secret is required.");

    this._token = token;
    this._secret = secret;
  }
}

const API_ENDPOINT = "https://api.switch-bot.com";

function generateHeader(token: string, secret: string): {Authorization: string, sign: string, nonce: string, t: string} {
  const t = Date.now();

  const nonce = randomUUID();
  const data = token + t + nonce;
  const signTerm = createHmac('sha256', secret)
    .update(Buffer.from(data, 'utf-8'))
    .digest();
  const sign = signTerm.toString("base64");

  return {
    "Authorization": token,
    "sign": sign,
    "nonce": nonce,
    "t": t.toString(),
  };
}
function API_request(token: string, secret: string, version: API_Version, method: RequestMethod, url: string, rawBody?: object): Promise<ResponseBase> {
  return new Promise((resolve, reject) => {
    if (!url.startsWith("/")) throw new Error("URL must start with '/'.");

    
    const config: any = {
      method,
      headers: {
        ...generateHeader(token, secret)
      }
    }

    if (method === "POST") {
      const body = rawBody === undefined ? "{}" : JSON.stringify(rawBody);
      
      config.headers["Content-Length"] = body.length;
      config.headers["Content-Type"]   = "application/json; charset=utf8";
      config.body = body;
      config.port = 443;
    }

    fetch(API_ENDPOINT+"/v"+version+url, config).then(e => {
      e.json().then(json => {
        resolve(json);
      })
    }).catch(reason => {
      reject(reason);
    });
  });
}

export class SwitchbotRequester {
  private _token : string;
  private _secret: string;

  constructor(config: Config) {
    if (!config) throw new Error("Config is required");
    if (config.constructor.name !== Config.name) 
      throw new Error("Config must be an instance of Config.");

    this._token  = config.token;
    this._secret = config.secret;
  }

  private request(version: API_Version, method: RequestMethod, url: string, rawBody?: object): Promise<ResponseBase> {
    return API_request(this._token, this._secret, version, method, url, rawBody);
  }
  _getRequest(version: API_Version, url: string) {
    return this.request(version, "GET", url);
  }
  _postRequest(version: API_Version, url: string, body: object) {
    return this.request(version, "POST", url, body);
  }
}

export class SwitchbotProduct extends SwitchbotRequester {
  private _deviceId: string;
  get deviceId(): string {
    return this._deviceId;
  }

  constructor(config: Config, deviceId: string) {
    super(config);
    this._deviceId = deviceId;
  }
  _sendCommand(command: string): Promise<ResponseBase>;
  _sendCommand({command, parameter, commandType}: {command: string, parameter?: any, commandType?: string}): Promise<ResponseBase>;
  _sendCommand(arg: string | {command: string, parameter?: any, commandType?: string}) {
    let body: {command: string, parameter: any, commandType: string};

    if (typeof arg === "string") {
      body = {
        command: arg,
        commandType: "command",
        parameter: "default"
      }
    } else {
      body = {
        command: arg.command,
        commandType: arg.commandType ?? "command",
        parameter: arg.parameter ?? "default"
      }
    }

    return this._postRequest(
      "1.1",
      "/devices/"+this.deviceId+"/commands",
      body
    );
  }
}

export class SwitchbotBasic extends SwitchbotProduct {
  async getStatus(): Promise<any> {
    return (await this._getRequest("1.1", "/devices/"+this.deviceId+"/status")).body;
  }
}

export class IR_Base extends SwitchbotProduct {
  sendCustomCommand(commandName: string) {
    return this._sendCommand({
      command: commandName,
      commandType: "customize"
    });
  }
}

export class SwitchBotAPI extends Config {
  private request(version: API_Version, method: RequestMethod, url: string, rawBody?: object): Promise<ResponseBase> {
    return API_request(this.token, this.secret, version, method, url, rawBody);
  }
  private getRequest(version: API_Version, url: string) {
    return this.request(version, "GET", url);
  }
  private postRequest(version: API_Version, url: string, body: object) {
    return this.request(version, "POST", url, body);
  }


  async getDevices(): Promise<SwitchbotDevicesResponse> {
    return (await this.getRequest("1.1", "/devices")).body;
  }
}

