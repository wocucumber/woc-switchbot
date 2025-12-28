export interface Base {
    /** device ID */
    deviceId: string;
    /**device type. */
    deviceType: string;
    /**device's parent Hub ID. 000000000000 when the device itself is a Hub or it is connected through Wi-Fi. */
    hubDeviceId: string;
}
/**the connection status of the device. online or offline */
type OnlineStatus = "online" | "offline";
/**ON/OFF state */
type OnOff = "on" | "off";
export interface BotStatus extends Base {
    deviceType: "Bot";
    /**ON/OFF state */
    power: OnOff;
    /**Four-segment battery level division,<10%, shown as 9;10%~20%, shown as 19;20%~60%, shown as 59;≥60%, shown as 100 */
    battery: number;
    /**the current firmware version, e.g. V6.3 */
    version: string;
    /**pressMode, switchMode, or customizeMode */
    deviceMode: "pressMode" | "switchMode" | "customizeMode";
}
export interface PlugMiniStatus extends Base {
    deviceType: "Plug Mini (JP)" | "Plug Mini (EU)" | "Plug Mini (US)";
    /**ON/OFF state */
    power: OnOff;
    /**(Float) the voltage of the device, measured in Volt */
    voltage: number;
    /**the current BLE and Wi-Fi firmware version, e.g. V3.1-6.3 */
    version: string;
    /**(Float) the power consumed in a day, measured in Watts */
    weight: number;
    /**(Int) the duration that the device has been used during a day, measured in minutes */
    electricityOfDay: number;
    /**(Float) the current of the device at the moment, measured in mA */
    electricCurrent: number;
}
export interface StripLightStatus extends Base {
    deviceType: "Strip Light";
    /**ON/OFF state */
    power: OnOff;
    /** 	the current BLE and Wi-Fi firmware version, e.g. V3.1-6.3 */
    version: string;
    /**the brightness value, range from 1 to 100 */
    brightness: number;
    /**the color value, RGB "255:255:255" */
    color: string;
    /**the connection status of the device. online or offline */
    onlineStatus: OnlineStatus;
}
interface CurtainBase extends Base {
    /**determines if the open position and the close position of a device have been properly calibrated or not */
    calibrate: boolean;
    /**determines if a Curtain is paired with or grouped with another Curtain or not */
    group: boolean;
    /**determines if a Curtain is moving or not */
    moving: boolean;
    /**(int) Four-segment battery level division,<10%, shown as 5;10%~20%, shown as 15;20%~60%, shown as 40;≥60%, shown as 80 */
    battery: number;
    /**the current firmware version, e.g. V4.2 */
    version: string;
    /**the percentage of the distance between the calibrated open position and closed position that Curtain has traversed */
    slidePosition: string;
}
export interface CurtainStatus extends CurtainBase {
    deviceType: "Curtain";
}
export interface Curtain3Status extends CurtainBase {
    deviceType: "Curtain3";
}
interface MeterBaseStatus extends Base {
    /**(Float) temperature in celsius */
    temperature: number;
    /**the current firmware version, e.g. V4.2 */
    version: string;
    /**(Int) Four-segment battery level division,<10%, shown as 10;10%~20%, shown as 20;20%~60%, shown as 60;≥60%, shown as 100 */
    battery: number;
    /**(Int) humidity percentage */
    humidity: number;
}
export interface MeterStatus extends MeterBaseStatus {
    deviceType: "Meter";
}
export interface MeterPlusStatus extends MeterBaseStatus {
    deviceType: "MeterPlus";
}
export interface OutdoorMeterStatus extends MeterBaseStatus {
    deviceType: "WoIOSensor";
}
export interface MeterProStatus extends MeterBaseStatus {
    deviceType: "MeterPro";
    /**the current battery level, 0-100 */
    bettery: number;
}
export interface MeterProCO2Status extends MeterBaseStatus {
    deviceType: "MeterPro(CO2)";
    /**(Int) CO2 ppm value, 0-9999 */
    CO2: number;
}
export {};
//# sourceMappingURL=status.d.ts.map