import { IGameObject, GameObject } from './gameobject'
import { krynn } from './index'

interface IScene {
    frameHandler(): void
}

abstract class Scene implements IScene {
    constructor() {
    }

    /**
     * 场景中的所有游戏对象
     */
    gameObjects: IGameObject[] = []

    /**
     * 带name的GameObject的冗余存储,方便查找
     */
    nameGameObjects = {}

    loadSence() {

    }

    frameHandler() {
        this.update()
        this.render()
    }

    update() {
        // console.log('update entity')
        this.gameObjects.forEach(gameObject => {
            gameObject.active && gameObject.update()
        })
    }

    render() {
        this.gameObjects.forEach(gameObject => {
            gameObject.active && gameObject.draw()
        })
        //console.log('', this, krynn.sceneManager.tick)
    }

    addGameObject(gameObject: IGameObject): GameObject {
        this.gameObjects.push(gameObject)
        gameObject.name && (this.nameGameObjects[gameObject.name] = gameObject)
        return gameObject
    }
}


export { IScene, Scene }