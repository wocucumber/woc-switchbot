import { IR_Base } from "../core.js";
var AIR_CONDITIONER_MODE;
(function (AIR_CONDITIONER_MODE) {
    AIR_CONDITIONER_MODE[AIR_CONDITIONER_MODE["AUTO"] = 1] = "AUTO";
    AIR_CONDITIONER_MODE[AIR_CONDITIONER_MODE["COOL"] = 2] = "COOL";
    AIR_CONDITIONER_MODE[AIR_CONDITIONER_MODE["DRY"] = 3] = "DRY";
    AIR_CONDITIONER_MODE[AIR_CONDITIONER_MODE["FAN"] = 4] = "FAN";
    AIR_CONDITIONER_MODE[AIR_CONDITIONER_MODE["HEAT"] = 5] = "HEAT";
})(AIR_CONDITIONER_MODE || (AIR_CONDITIONER_MODE = {}));
var AIR_CONDITIONER_FAN_SPEED;
(function (AIR_CONDITIONER_FAN_SPEED) {
    AIR_CONDITIONER_FAN_SPEED[AIR_CONDITIONER_FAN_SPEED["AUTO"] = 1] = "AUTO";
    AIR_CONDITIONER_FAN_SPEED[AIR_CONDITIONER_FAN_SPEED["LOW"] = 2] = "LOW";
    AIR_CONDITIONER_FAN_SPEED[AIR_CONDITIONER_FAN_SPEED["MEDIUM"] = 3] = "MEDIUM";
    AIR_CONDITIONER_FAN_SPEED[AIR_CONDITIONER_FAN_SPEED["HIGH"] = 4] = "HIGH";
})(AIR_CONDITIONER_FAN_SPEED || (AIR_CONDITIONER_FAN_SPEED = {}));
var AIR_CONDITIONER_POWER;
(function (AIR_CONDITIONER_POWER) {
    AIR_CONDITIONER_POWER["ON"] = "on";
    AIR_CONDITIONER_POWER["OFF"] = "off";
})(AIR_CONDITIONER_POWER || (AIR_CONDITIONER_POWER = {}));
export default class AirConditioner extends IR_Base {
    static get MODE() {
        return AIR_CONDITIONER_MODE;
    }
    static get FAN_SPEED() {
        return AIR_CONDITIONER_FAN_SPEED;
    }
    static get POWER() {
        return AIR_CONDITIONER_POWER;
    }
    set({ temperature, mode, fanSpeed = AirConditioner.FAN_SPEED.AUTO, power = AirConditioner.POWER.ON }) {
        return this._sendCommand({
            command: "setAll",
            parameter: temperature + "," + mode + "," + fanSpeed + "," + power
        });
    }
    stop() {
        return this.set({ temperature: 20, mode: AirConditioner.MODE.HEAT, power: AirConditioner.POWER.OFF });
    }
}
//# sourceMappingURL=airConditioner.js.map