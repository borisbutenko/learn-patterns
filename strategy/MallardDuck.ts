import Duck from "./Duck"
import Quack from "./Quack"
import FlyWithWings from "./FlyWithWings"

class MallardDuck extends Duck {
    flyBehavior = new FlyWithWings()

    quackBehavior = new Quack()

    public display(): void {
        console.log("I'm a real Mallard duck")
    }
}

export default MallardDuck
