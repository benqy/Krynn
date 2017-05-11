import SceneManager from './SceneManager'
import { IScene, Scene } from './Scene'
import { IGameObject, GameObject } from './GameObject'

let krynn = {
    /**
     * 启动指定的游戏
     * @param fps 游戏帧数
     * @param game 游戏实例
     */
    start(fps?: number, scene?: IScene) {
        this.sceneManager = new SceneManager(fps)
        scene && this.sceneManager.setGame(scene)
        this.sceneManager.startLoop()
    },
    sceneManager: <SceneManager>null
}

export { krynn,IScene, Scene, IGameObject, GameObject }
