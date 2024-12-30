import { Observable } from "./observable";

export class Subject<T> extends Observable<T> {
    constructor() {
        super();
    }

    notify(value: T): void {
        super.notify(value);
    }
}