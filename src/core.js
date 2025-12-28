import req from "request";
import {createHmac, randomUUID} from "crypto";


class Config{
	constructor(token, secret){
		if (!token | !secret) throw new Error("Token or secret is not defined.");
		this.token = token;
		this.secret = secret;
	}
}

class SwitchbotRequester{
	#token;
	#secret;
	#baseURL = "https://api.switch-bot.com";

	/**
	 * 
	 * @param {Config} config 
	 */
	constructor(config){
		if (!config) throw new Error("Config is not defined.");
		this.#setTokenSecret(config);
	}

	___warn(...msg) {
		return console.error(this.constructor.name+":", ...msg);
	}
	/**
	 * 
	 * @param {Config} val
	 */
	#setTokenSecret(val){
		this.#token  = val.token;
		this.#secret = val.secret;
	}
	get #header(){
		const token = this.#token;
		const secret = this.#secret;

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
			"t": t,
		};
	}
	#request(version, method, url, rawBody){
		return new Promise(async (resolve, reject)=>{
			if(version != "1.1") this.___warn("Version \""+version+"\" is not 1.1.");
			if(!url.startsWith("/")) this.___warn("URL \""+url+"\""+" doesn't start with \"/\"")
			
			const body = JSON.stringify(rawBody ?? {});

			const add = {};
			const headerAdd = {};

			if(method == "POST"){
				headerAdd["Content-Length"] = body.length;
				headerAdd["Content-Type"]   = "application/json";
				add["body"] = body;
				add["port"] = 443;
			}

			const conf = {
				url: this.#baseURL+"/v"+version+url,
				method: method,
				headers: {
					...this.#header,
					...headerAdd
				},
				// json: true,
				...add
			}
			
			fetch(conf.url, conf).then(e => {
				e.json().then(json => {
					resolve(json);
				})
			}).catch((reason) => {
				return reject(reason)
			});
			// req(conf, (err, res)=>{
			// 	if(err) return reject(err);
			// 	resolve(JSON.parse(res.body));
			// });
		});
	}
	async ___request_get(version, url){
		return await this.#request(version, "GET", url);
	}
	async ___request_post(version, url, body){
		return await this.#request(version, "POST", url, body);
	}
}


class SwitchbotProduct extends SwitchbotRequester {
	constructor(config, deviceId) {
		super(config);
		this.___deviceId = deviceId;
	}
	async ___sendCommand({
		command, parameter="default", commandType="command"
	}){
		const deviceId = this.___deviceId;
		return (await this.___request_post(
			"1.1",
			"/devices/"+deviceId+"/commands",
			{
				command,
				parameter,
				commandType
			}));
	}
}


class SwitchbotBasic extends SwitchbotProduct {
	async getStatus() {
		return (await this.___request_get("1.1", "/devices/"+this.___deviceId+"/status")).body;
	}
}

class IR_Base extends SwitchbotProduct {
	async sendCustomCommand(name){
		return await this.___sendCommand({
			"command": name,
			"parameter": "default",
			"commandType": "customize"
		});
	}
}

export { SwitchbotBasic, SwitchbotProduct, IR_Base, Config, SwitchbotRequester };