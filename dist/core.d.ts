import type { Base as StatusBase } from "./status.js";
import type { SwitchbotDevicesResponse } from "./deviceGetter.js";
type API_Version = "1.1";
export interface ResponseBase {
    statusCode: number;
    message: string;
    body: any;
}
export declare class Config {
    private _token;
    get token(): string;
    private _secret;
    get secret(): string;
    constructor(token: string, secret: string);
}
export declare class SwitchbotRequester {
    private _token;
    private _secret;
    constructor(config: Config);
    private request;
    _getRequest(version: API_Version, url: string): Promise<ResponseBase>;
    _postRequest(version: API_Version, url: string, body: object): Promise<ResponseBase>;
}
export declare class SwitchbotProduct extends SwitchbotRequester {
    private _deviceId;
    get deviceId(): string;
    constructor(config: Config, deviceId: string);
    _sendCommand(command: string): Promise<ResponseBase>;
    _sendCommand({ command, parameter, commandType }: {
        command: string;
        parameter?: any;
        commandType?: string;
    }): Promise<ResponseBase>;
}
export declare class SwitchbotBasic extends SwitchbotProduct {
    getStatus(): Promise<StatusBase>;
}
export declare class IR_Base extends SwitchbotProduct {
    sendCustomCommand(commandName: string): Promise<ResponseBase>;
}
export declare class SwitchBotAPI extends Config {
    private request;
    private getRequest;
    private postRequest;
    getDevices(): Promise<SwitchbotDevicesResponse>;
}
export {};
//# sourceMappingURL=core.d.ts.map