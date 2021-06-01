import FlyBehavior from "./interface/FlyBehavior"

class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log("I'm flying!")
    }
}

export default FlyWithWings
