import { SwitchbotBasic } from "../core.js";
var CURTAIN_MODE;
(function (CURTAIN_MODE) {
    CURTAIN_MODE["PerformanceMode"] = "0";
    CURTAIN_MODE["SilentMode"] = "1";
    CURTAIN_MODE["DefaultMode"] = "ff";
})(CURTAIN_MODE || (CURTAIN_MODE = {}));
class CurtainBase extends SwitchbotBasic {
    static get MODE() {
        return CURTAIN_MODE;
    }
    setPosition({ index = 0, mode = CurtainBase.MODE.DefaultMode, position }) {
        if (typeof position !== "number") {
            position = Number(position);
            if (isNaN(position))
                throw new Error("Position must be number.");
        }
        if (position < 0 || position > 100)
            throw new Error("Position must be between 0 and 100.");
        return this._sendCommand({
            command: "setPosition",
            parameter: index + "," + mode + "," + position
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
    getStatus() {
        return super.getStatus();
    }
}
export class Curtain3 extends CurtainBase {
    getStatus() {
        return super.getStatus();
    }
}
//# sourceMappingURL=curtain.js.map