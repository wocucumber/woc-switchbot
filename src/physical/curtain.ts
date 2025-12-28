import { SwitchbotBasic } from "../core.js";
import type { Curtain3Status, CurtainStatus } from "../status.js";

enum CURTAIN_MODE {
  PerformanceMode = "0",
  SilentMode      = "1",
  DefaultMode     = "ff"
}
interface PositionArgument {
  index?: number,
  mode?: CURTAIN_MODE,
  /**0 means open, 100 means closed */
  position: number
}


class CurtainBase extends SwitchbotBasic {
  static get MODE(): typeof CURTAIN_MODE {
    return CURTAIN_MODE;
  }

  setPosition({index=0, mode=CurtainBase.MODE.DefaultMode, position}: PositionArgument) {
    if (typeof position !== "number") {
      position = Number(position);
      if (isNaN(position))
        throw new Error("Position must be number.");
    }

    if (position < 0 || position > 100)
      throw new Error("Position must be between 0 and 100.");

    return this._sendCommand({
      command: "setPosition",
      parameter: index+","+mode+","+position
    });
  }

  /**equivalent to set position to 0 */
  turnOn() {
    return this._sendCommand("turnOn");
  }
  /**equivalent to set position to 100 */
  turnOff() {
    return this._sendCommand("turnOff");
  }
  pause() {
    return this._sendCommand("pause");
  }
}

export class Curtain extends CurtainBase {
  getStatus(): Promise<CurtainStatus> {
    return super.getStatus();
  }
}

export class Curtain3 extends CurtainBase {
  getStatus(): Promise<Curtain3Status> {
    return super.getStatus();
  }
}