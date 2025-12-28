import { IR_Base } from "../core.js";

class IR_Light extends IR_Base{
	async setPower(power){
    if (power)
      return await this.turnOn();
    else
      return await this.turnOff();
	}

  async turnOn(){
    return await this.___sendCommand({
			"command": "turnOn"
		});
  }
  async turnOff(){
    return await this.___sendCommand({
			"command": "turnOff"
		});
  }

	async upBrightness(){
		return await this.___sendCommand({
			"command": "brightnessUp"
		});
	}

	async downBrightness(){
		return await this.___sendCommand({
			"command": "brightnessDown"
		});
	}
}

export default IR_Light;