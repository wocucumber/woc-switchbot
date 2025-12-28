import { createHmac, randomUUID } from "crypto";
class Config {
    _token;
    get token() {
        return this._token;
    }
    _secret;
    get secret() {
        return this._secret;
    }
    constructor(token, secret) {
        if (!token)
            throw new Error("Token is required.");
        if (!secret)
            throw new Error("Secret is required.");
        this._token = token;
        this._secret = secret;
    }
}
const API_ENDPOINT = "https://api.switch-bot.com";
export class SwitchbotRequester {
    _token;
    _secret;
    constructor(config) {
        if (!config)
            throw new Error("Config is required");
        if (config.constructor.name !== Config.name)
            throw new Error("Config must be an instance of Config.");
        this._token = config.token;
        this._secret = config.secret;
    }
    get #header() {
        const t = Date.now();
        const nonce = randomUUID();
        const data = this._token + t + nonce;
        const signTerm = createHmac('sha256', this._secret)
            .update(Buffer.from(data, 'utf-8'))
            .digest();
        const sign = signTerm.toString("base64");
        return {
            "Authorization": this._token,
            "sign": sign,
            "nonce": nonce,
            "t": t.toString(),
        };
    }
    request(version, method, url, rawBody) {
        return new Promise((resolve, reject) => {
            if (!url.startsWith("/"))
                throw new Error("URL must start with '/'.");
            const config = {
                method,
                headers: {
                    ...this.#header
                }
            };
            if (method === "POST") {
                const body = rawBody === undefined ? "{}" : JSON.stringify(rawBody);
                config.headers["Content-Length"] = body.length;
                config.headers["Content-Type"] = "application/json; charset=utf8";
                config.body = body;
                config.port = 443;
            }
            fetch(API_ENDPOINT + "/v" + version + url, config).then(e => {
                e.json().then(json => {
                    resolve(json);
                });
            }).catch(reason => {
                reject(reason);
            });
        });
    }
    _getRequest(version, url) {
        return this.request(version, "GET", url);
    }
    _postRequest(version, url, body) {
        return this.request(version, "POST", url, body);
    }
}
export class SwitchbotProduct extends SwitchbotRequester {
    _deviceId;
    get deviceId() {
        return this._deviceId;
    }
    constructor(config, deviceId) {
        super(config);
        this._deviceId = deviceId;
    }
    _sendCommand({ command, parameter = "default", commandType = "command" }) {
        return this._postRequest("1.1", "/devices/" + this.deviceId + "/commands", {
            command,
            parameter,
            commandType
        });
    }
}
export class SwitchbotBasic extends SwitchbotProduct {
    async getStatus() {
        return (await this._getRequest("1.1", "/devices/" + this.deviceId + "/status")).body;
    }
}
export class IR_Base extends SwitchbotProduct {
    sendCustomCommand(commandName) {
        return this._sendCommand({
            command: commandName,
            commandType: "customize"
        });
    }
}
