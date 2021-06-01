import FlyBehavior from "./interface/FlyBehavior"

class FlyRocketPowered implements FlyBehavior {
    public fly(): void {
        console.log("I'm flying with a rocket!")
    }
}

export default FlyRocketPowered
