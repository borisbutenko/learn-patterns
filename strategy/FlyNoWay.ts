import FlyBehavior from "./interface/FlyBehavior"

class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log("I can't fly")
    }
}

export default FlyNoWay
