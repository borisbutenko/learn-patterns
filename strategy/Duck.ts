import FlyBehavior from "./interface/FlyBehavior"
import QuackBehavior from "./interface/QuackBehavior"

abstract class Duck {
    abstract flyBehavior: FlyBehavior

    abstract quackBehavior: QuackBehavior

    public abstract display(): void

    public performFly(): void {
        this.flyBehavior.fly()
    }

    public performQuack(): void {
        this.quackBehavior.quack()
    }

    public swim(): void {
        console.log("All ducks float, even decoys!")
    }

    public setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior
    }

    public setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior
    }
}

export default Duck
