import { System } from './system'
import { Game } from './game'
import { IGame } from './igame'

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

