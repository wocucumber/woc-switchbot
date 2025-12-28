import { SwitchbotRequester } from "./core.js";
export default class DeviceGetter extends SwitchbotRequester {
    async getDevices() {
        return (await this._getRequest("1.1", "/devices")).body;
    }
}
//# sourceMappingURL=deviceGetter.js.map