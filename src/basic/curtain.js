import { SwitchbotBasic } from "../core";

class Curtain extends SwitchbotBasic {
  static get MODE() {
    return {
      PerformanceMode: "0",
      SilentMode: "1",
      DefaultMode: "ff"
    }
  }

  setPosition({index=0, mode=Curtain.MODE.DefaultMode, position}) {

    if (typeof position !== "number") {
      position = Number(position);
      if (isNaN(position))
        this.___warn("Position must be number.");
    }

    if (position < 0 || position > 100) {
      this.___warn("Position must be greater than or equal to 0 and less than or qual to 100.");
    }


    return this.___sendCommand({
      command: "setPosition",
      parameter: index+","+mode+","+position
    });
  }

  setPower(power){
    if (power)
      return this.turnOn();
    else
      return this.turnOff();
	}

  turnOn() {
    return this.___sendCommand({
      command: "turnOn"
    });
  }

  turnOff() {
    return this.___sendCommand({
      command: "turnOff"
    });
  }

  pause() {
    return this.___sendCommand({
      command: "pause"
    });
  }
}
class Curtain3 extends Curtain {}

export { Curtain, Curtain3 };