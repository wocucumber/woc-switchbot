import { SwitchbotRequester, type CommandResponse } from "./core.js"

interface ResultScene {
  /**a scene's ID */
  sceneId: string,
  /**a scene's name */
  sceneName: string
}

export default class Scenes extends SwitchbotRequester {
  async getScenes(): Promise<ResultScene[]> {
    return (await this._getRequest("1.1", "/scenes")).body;
  }
  executeScene(sceneId: string): Promise<CommandResponse> {
    return this._postRequest("1.1", "/scenes/"+sceneId+"/execute");
  }
}