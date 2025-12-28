import { SwitchbotRequester } from "./core.js";

class DevicesGetter extends SwitchbotRequester{
	async getDevices(){
		return (await this.___request_get("1.1", "/devices")).body;
	}
}

export default DevicesGetter;