import QuackBehavior from "./interface/QuackBehavior"

class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log("<< Silence >>")
    }
}

export default MuteQuack
