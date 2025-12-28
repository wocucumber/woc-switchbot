interface Base {
	deviceId: string,
	deviceName: string,
	deviceType: string,
	enableCloudService: boolean,
	hubDeviceId: string
}

interface BotDevice extends Base {
  deviceType: "Bot"
}
interface CurtainDeviceBase extends Base {
  /**a list of Curtain device IDs such that the Curtain devices are being paired or grouped */
  curtainDevicesIds: string[]
  /**determines if the open position and the close position of a device have been properly calibrated or not */
  calibrate: boolean
  /**determines if a Curtain is paired with or grouped with another Curtain or not */
  group: boolean,
  /**determines if a Curtain is the master device or not when paired with or grouped with another Curtain */
  master: boolean,
  /**the opening direction of a Curtain */
  openDirection: string
}
interface CurtainDevice extends CurtainDeviceBase {
  deviceType: "Curtain"
}
interface Curtain3Device extends CurtainDeviceBase {
  deviceType: "Curtain3"
}

interface HubDevice extends Base {
  deviceType: "Hub" | "Hub Plus" | "Hub Mini" | "Hub 2" | "Hub 3"
}

interface MeterDevice extends Base {
  deviceType: "Meter"
}

interface MeterPlusDevice extends Base {
  deviceType: "Meter Plus"
}

interface OutdoorMeterDevice extends Base {
  deviceType: "WoIOSensor"
}

interface MeterPro extends Base {
  deviceType: "MeterPro"
}

interface MeterProCO2 extends Base {
  deviceType: "MeterPro(CO2)"
}

interface LockBase extends Base {
  /**determines if a Lock is grouped with another Lock or not */
  group: boolean,
  /**determines if a Lock is the master device or not when grouped with another Lock in Dual Lock mode */
  master: boolean,
  /**the name of the Lock group */
  groupName: string,
  /**a list of Lock device IDs such that the Lock devices are being grouped in Dual Lock mode */
  lockDevicesIds: string[]
}

interface Lock extends LockBase {
  deviceType: "Smart Lock"
}

interface LockPro extends LockBase {
  deviceType: "Smart Lock Pro"
}

interface LockUltra extends LockBase {
  deviceType: "Smart Lock Ultra"
}


export type SwitchbotDevice
= Base | BotDevice | CurtainDevice | Curtain3Device | HubDevice |
MeterDevice | MeterPlusDevice | OutdoorMeterDevice | MeterPro | MeterProCO2 |
Lock | LockPro | LockUltra;