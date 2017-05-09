import { Timer } from './timer'
import { IScene } from './scene'

export default class SceneManager {
    timer: Timer
    running = false
    /**
     * 循环器ID
     */
    intervalId: number

    /**
     * 当前游戏实例
     */
    scene: IScene

    /**
     * 当前已执行帧数(一般用于游戏内计时)
     */
    tick: number = 0

    /**
     * 游戏场景管理程序
     * @param fps 游戏帧数(默认60)
     */
    constructor(readonly fps: number = 60) {
        this.timer = new Timer()
    }

    setGame(scene: IScene) {
        this.scene = scene
    }

    frameHandler() {
        if (this.scene) {
            this.scene.frameHandler()
            this.tick++
        }
    }

    startLoop() {
        this.stopLoop()
        this.intervalId = setInterval(() => this.frameHandler(), 1000 / this.fps)
        this.running = true
    }

    stopLoop() {
        clearInterval(this.intervalId)
        this.running = false
    }
}