import QuackBehavior from "./interface/QuackBehavior"

class Quack implements QuackBehavior {
    public quack(): void {
        console.log("Quack")
    }
}

export default Quack
