import { IGameObject, GameObject } from './GameObject'
import { krynn } from './index'

interface IScene {
    run(): void
}

abstract class Scene implements IScene {
    constructor() {
    }

    /**
     * 场景中的所有游戏对象
     */
    gameObjects: IGameObject[] = []

    /**
     * key:name,value:GameObject
     */
    nameGameObjects = {}

    run() {
        this.update()
        this.render()
    }

    update() {
        //console.clear()
        // console.log('update entity')
        this.gameObjects.forEach(gameObject => {
            gameObject.active && gameObject.update()
        })
    }

    render() {
        this.gameObjects.forEach(gameObject => {
            gameObject.active && gameObject.render()
        })
        //console.log('', this, krynn.sceneManager.tick)
    }

    addGameObject(gameObject: IGameObject) {
        this.gameObjects.push(gameObject)
        gameObject.name && (this.nameGameObjects[gameObject.name] = gameObject)
    }
}


export { IScene, Scene }