import { CommandResponse, SwitchbotRequester } from "./core.js"

interface ResultScene {
  /**a scene's ID */
  sceneId: string,
  /**a scene's name */
  sceneName: string
}

declare class Scenes extends SwitchbotRequester {
  getScenes(): Promise<ResultScene[]>
  executeScene(sceneId: string): Promise<CommandResponse>
}

export default Scenes;