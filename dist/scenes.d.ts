import { SwitchbotRequester, type CommandResponse } from "./core.js";
interface ResultScene {
    /**a scene's ID */
    sceneId: string;
    /**a scene's name */
    sceneName: string;
}
export default class Scenes extends SwitchbotRequester {
    getScenes(): Promise<ResultScene[]>;
    executeScene(sceneId: string): Promise<CommandResponse>;
}
export {};
//# sourceMappingURL=scenes.d.ts.map