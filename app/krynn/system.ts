import { Timer } from './timer'
import { IGame } from './igame'

export class System {
    timer: Timer
    running = false
    /**
     * 循环器ID
     */
    intervalId: number

    /**
     * 当前游戏实例
     */
    game: IGame

    /**
     * 当前已执行帧数(一般用于游戏内计时)
     */
    tick: number = 0

    /**
     * 管理程序
     * @param fps 游戏帧数(默认60)
     */
    constructor(readonly fps: number = 60) {
        this.timer = new Timer()
    }

    setGame(game: IGame) {
        this.game = game
    }

    run() {
        if (this.game) {
            this.game.run()
            this.tick++
        }
    }

    startLoop() {
        this.stopLoop()
        this.intervalId = setInterval(() => this.run(), 1000 / this.fps)
        this.running = true
    }

    stopLoop() {
        clearInterval(this.intervalId)
        this.running = false
    }
}