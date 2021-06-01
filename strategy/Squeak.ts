import QuackBehavior from "./interface/QuackBehavior"

class Squeak implements QuackBehavior {
    public quack(): void {
        console.log("Squeak")
    }
}

export default Squeak
