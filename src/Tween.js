export default class Tween {
    constructor(object, property, target, time, easing, change, complete) {
        this.object = object;
        this.property = property;
        this.target = target;
        this.time = time;
        this.easing = easing;
        this.change = change;
        this.complete = complete;
        this.start = Date.now();
        this.propertyBeginValue = object[property];
    }
    static update() {
        const now = Date.now();
        const remove = [];
        for (let i = 0; i < Tween.tweening.length; i++) {
            const tween = Tween.tweening[i];
            const phase = Math.min(1, (now - tween.start) / tween.time);
            tween.object[tween.property] = Tween.lerp(tween.propertyBeginValue, tween.target, tween.easing(phase));
            if (tween.change) {
                tween.change(tween);
            }
            if (phase === 1) {
                tween.object[tween.property] = tween.target;
                if (tween.complete) {
                    tween.complete(tween);
                }
                remove.push(tween);
            }
        }
        for (let i = 0; i < remove.length; i++) {
            Tween.tweening.splice(Tween.tweening.indexOf(remove[i]), 1);
        }
    }
    static backout(amount) {
        return t => (--t * t * ((amount + 1) * t + amount) + 1);
    }
    static lerp(a1, a2, t) {
        return a1 * (1 - t) + a2 * t;
    }
}
Tween.tweening = [];
