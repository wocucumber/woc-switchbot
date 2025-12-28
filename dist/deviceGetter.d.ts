import { SwitchbotRequester } from "./core.js";
import type { SwitchbotDevice } from "./device.js";
export interface SwitchbotDevicesResponse {
    /**(This is not enough.) a list of physical devices */
    deviceList: SwitchbotDevice[];
    /**(This maybe be enough.)a list of virtual infrared remote devices */
    infraredRemoteList: InfraredDevice[];
}
interface InfraredDevice {
    deviceId: string;
    deviceName: string;
    remoteType: string;
    hubDeviceId: string;
}
export default class DeviceGetter extends SwitchbotRequester {
    getDevices(): Promise<SwitchbotDevicesResponse>;
}
export {};
//# sourceMappingURL=deviceGetter.d.ts.map