import {krynn} from'./index'

interface IGame {
    update(): void
}

class Game implements IGame {
    constructor() {

    }

    update() {
        console.log('update entity')
    }

    render() {
        console.log('', this,krynn.system.tick)
    }
}


export {IGame,Game}