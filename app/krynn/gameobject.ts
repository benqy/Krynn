
/**
 * 游戏对象必须实现此接口,如:玩家,怪物,子弹,陷阱,墙壁等
 */
interface IGameObject {
    /**
     * 是否激活,暂时不使用的gameobject可设为false,游戏场景将跳过对此对象的任何操作,以减少计算,提高性能
     */
    active: boolean

    /**
     * 为true时,此对象将在场景下一帧中被销毁
     */
    killed: boolean
    name: string
    update(): void
    destory(): void
    draw(): void
}

/**
 * 游戏对象,如:玩家,怪物,子弹,陷阱,墙壁等
 */
class GameObject implements IGameObject {
    constructor(settings = {}) {

    }

    name: string

    killed = false

    active = true

    update() {

    }

    draw() {

    }

    destory() {

    }
}

export { IGameObject, GameObject }