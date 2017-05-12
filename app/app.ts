import { krynn, Scene, GameObject } from './krynn'

class CodeWorld extends Scene {
    constructor() {
        super()
        console.log('welcome to code world')
    }
}

class Worn extends GameObject {
    name = '蠕虫'
    life:number
    speed:number

    constructor(life:number = 50,speed:number = 50){
        super()
        this.life = life
        this.speed = speed
    }

    update() {
        console.log(`遭遇${this.name},life:${this.life},speed:${this.speed}`)
    }
}

let myScene = new CodeWorld()



// myScene.addGameObject(new Worn(100,30))
// myScene.addGameObject(new Worn(70,20))

krynn.start(0.5, myScene)
