import { SwitchbotRequester } from "./core.js";

interface SwitchbotDevices {
	/**(This is not enough.) a list of physical devices */
	deviceList: Device[],
	/**(This maybe be enough.)a list of virtual infrared remote devices */
	infraredRemoteList: InfraredDevice[]
}

interface Device {
	deviceId: string,
	deviceName: string,
	deviceType: string,
	enableCloudService: boolean,
	hubDeviceId: string
}

interface InfraredDevice {
	deviceId: string,
	deviceName: string,
	remoteType: string,
	hubDeviceId: string
}

declare class DevicesGetter extends SwitchbotRequester{
	getDevices(): Promise<SwitchbotDevices>
}

export { type SwitchbotDevices }
export default DevicesGetter;