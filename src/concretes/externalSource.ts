import { Subject } from "../Observer/subject";

export class ExternalSource extends Subject<number> {
    emitValue(value: number) {
        this.notify(value);
    }
}
