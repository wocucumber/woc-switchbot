import { SwitchbotBasic } from "../core.js";

class Bot extends SwitchbotBasic {
	async setPower(power){
    if (power)
      return await this.turnOn();
    else
      return await this.turnOff();
	}
	turnOn() {
		return this.___sendCommand({
			command: "turnOn"
		})
	}
	turnOff() {
		return this.___sendCommand({
			command: "turnOff"
		})
	}
	press() {
		return this.___sendCommand({
			command: "press"
		})
	}
	
}

export default Bot;