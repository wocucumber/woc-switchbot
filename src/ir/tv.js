import { IR_Base } from "../core.js";

export default class IR_TV extends IR_Base{
	async togglePower(){
		return await this.___sendCommand({
			"command": "turnOn",
		});
	}
	async setChannel(channel){
		return await this.___sendCommand({
			"command": "SetChannel",
			"parameter": channel
		});
	}
	async volumeUp(){
		return await this.___sendCommand({
			"command": "volumeAdd"
		});
	}
	async volumeDown(){
		return await this.___sendCommand({
			"command": "volumeSub"
		});
	}
}