import { IGame } from './igame'
import {krynn} from'./index'

export class Game implements IGame {
    constructor() {

    }

    update() {
        console.log('update entity')
    }

    run() {
        console.log('run', this,krynn.system.tick)
    }
}
