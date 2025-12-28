interface Base {
    deviceId: string;
    deviceName: string;
    deviceType: string;
    enableCloudService: boolean;
    hubDeviceId: string;
}
interface BotDevice extends Base {
    deviceType: "Bot";
}
interface CurtainDeviceBase extends Base {
    /**a list of Curtain device IDs such that the Curtain devices are being paired or grouped */
    curtainDevicesIds: string[];
    /**determines if the open position and the close position of a device have been properly calibrated or not */
    calibrate: boolean;
    /**determines if a Curtain is paired with or grouped with another Curtain or not */
    group: boolean;
    /**determines if a Curtain is the master device or not when paired with or grouped with another Curtain */
    master: boolean;
    /**the opening direction of a Curtain */
    openDirection: string;
}
interface CurtainDevice extends CurtainDeviceBase {
    deviceType: "Curtain";
}
interface Curtain3Device extends CurtainDeviceBase {
    deviceType: "Curtain3";
}
interface HubDevice extends Base {
    deviceType: "Hub" | "Hub Plus" | "Hub Mini" | "Hub 2" | "Hub 3";
}
interface MeterDevice extends Base {
    deviceType: "Meter";
}
interface MeterPlusDevice extends Base {
    deviceType: "Meter Plus";
}
interface OutdoorMeterDevice extends Base {
    deviceType: "WoIOSensor";
}
interface MeterPro extends Base {
    deviceType: "MeterPro";
}
interface MeterProCO2 extends Base {
    deviceType: "MeterPro(CO2)";
}
interface LockBase extends Base {
    /**determines if a Lock is grouped with another Lock or not */
    group: boolean;
    /**determines if a Lock is the master device or not when grouped with another Lock in Dual Lock mode */
    master: boolean;
    /**the name of the Lock group */
    groupName: string;
    /**a list of Lock device IDs such that the Lock devices are being grouped in Dual Lock mode */
    lockDevicesIds: string[];
}
interface Lock extends LockBase {
    deviceType: "Smart Lock";
}
interface LockPro extends LockBase {
    deviceType: "Smart Lock Pro";
}
interface LockUltra extends LockBase {
    deviceType: "Smart Lock Ultra";
}
interface KeypadBase extends Base {
    /**MAC address of the Lock that the current device is paired with */
    lockDeviceId: string;
    /**a list of passcodes */
    keyList: KeypadPasscode[];
}
interface KeypadPasscode {
    /**(Int) passcode ID */
    id: number;
    /**name of the passcode */
    name: string;
    /**type of the passcode. permanent, a permanent passcode. timeLimit, a temporary passcode. disposable, a one-time passcode. urgent, an emergency passcode. */
    type: "permanent" | "timeLimit" | "disposable" | "urgent";
    /**the passcode string encrypted with the developer secret key using the aes-128-cbc algorithm */
    password: string;
    /**an arbitrary number used for the encryption */
    iv: string;
    /**validity of the passcode. normal, the passcode is valid. expired, the passcode is invalid. */
    status: "normal" | "expired";
    /**(Long) the time when the passcode is generated */
    createTime: number;
}
interface Keypad extends KeypadBase {
    deviceType: "Keypad";
}
interface KeypadTouch extends KeypadBase {
    deviceType: "Keypad Touch";
}
interface Remote extends Base {
    deviceType: "Remote";
}
export type SwitchbotDevice = BotDevice | CurtainDevice | Curtain3Device | HubDevice | MeterDevice | MeterPlusDevice | OutdoorMeterDevice | MeterPro | MeterProCO2 | Lock | LockPro | LockUltra | Keypad | KeypadTouch | Remote;
export {};
//# sourceMappingURL=device.d.ts.map