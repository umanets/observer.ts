import { Subject } from "../Observer/subject";

export class Calculator extends Subject<number> {
    intensiveCalculation() {
        const result = 2 + 2;
        this.notify(result);
        return result;
    }
}