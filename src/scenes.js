import { SwitchbotRequester } from "./core.js"

class Scenes extends SwitchbotRequester {
  async getScenes() {
    return (await this.___request_get("1.1", "/scenes")).body;
  }
  async executeScene(sceneId) {
    return await this.___request_post("1.1", "/scenes/"+sceneId+"/execute");
  }
}

export default Scenes;