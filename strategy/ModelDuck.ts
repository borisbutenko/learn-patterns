import Duck from "./Duck"
import FlyNoWay from "./FlyNoWay"
import Quack from "./Quack"

class ModelDuck extends Duck {
    flyBehavior = new FlyNoWay()

    quackBehavior = new Quack()

    public display(): void {
        console.log("I'm model duck")
    }
}

export default ModelDuck
