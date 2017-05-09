import { System } from './system'
import {IGame, Game } from './game'

let krynn = {
    start(fps?: number, game?: IGame) {
        krynn.system = new System(fps)
        game && this.system.setGame(game)
        this.system.startLoop()
        console.log(this.system)
    },
    system:<System>null,
    Game: Game
}

export { krynn }

