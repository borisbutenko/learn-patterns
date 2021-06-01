import Duck from "./Duck"
import MallardDuck from "./MallardDuck"
import ModelDuck from "./ModelDuck"
import MuteQuack from "./MuteQuack"
import FlyRocketPowered from "./FlyRocketPowered"

function makeMallardDuck(): void {
    let mallard: Duck = new MallardDuck()

    mallard.display()
    mallard.performQuack()
    mallard.performFly()
    mallard.swim()
}

function makeModelDuck(): void {
    let model: Duck = new ModelDuck()

    model.display()
    model.performQuack()
    model.performFly()
    model.setQuackBehavior(new MuteQuack())
    model.performQuack()
    model.setFlyBehavior(new FlyRocketPowered())
    model.performFly()
}

function main(): void {
    makeMallardDuck()
    makeModelDuck()
}

main()
