import { SwitchbotRequester } from "./core.js";
export default class Scenes extends SwitchbotRequester {
    async getScenes() {
        return (await this._getRequest("1.1", "/scenes")).body;
    }
    executeScene(sceneId) {
        return this._postRequest("1.1", "/scenes/" + sceneId + "/execute");
    }
}
