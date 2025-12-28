import { IR_Base } from "../core.js";

class IR_AirConditioner extends IR_Base{
  static get MODE() {
    return {
      AUTO: 1,
      COOL: 2,
      DRY : 3,
      FAN : 4,
      HEAT: 5
    }
  }
  static get FAN_SPEED() {
    return {
      AUTO: 1,
      LOW : 2,
      MEDIUM: 3,
      HIGH: 4
    }
  }
  static get POWER() {
    return {
      ON : "on",
      OFF: "off"
    }
  }
	async set({
		temperature=20,
		mode=this.MODE.HEAT,
		fanSpeed=this.FAN_SPEED.AUTO,
		power=this.POWER.ON
	}){
		if(isNaN(temperature)) this.___warn("Temperature is "+temperature+".");
		if(isNaN(mode) || 1 > mode || mode > 5) this.___warn("Mode is "+mode+". Min is 1. Max is 5.");
		if(isNaN(fanSpeed) || 1 > fanSpeed || fanSpeed > 4) this.___warn("Fan speed is "+fanSpeed+". Min is 1. Max is 4.");
		if(power != "on" && power != "off") this.___warn("Power is "+power+". Power allowed \"on\" and \"off\" only.");

		return await this.___sendCommand({
			"command": "setAll",
			"parameter": temperature+","+mode+","+fanSpeed+","+power
		});
	}
	async stop(){
		return await this.set({power: this.POWER.OFF});
	}
}


export default IR_AirConditioner;