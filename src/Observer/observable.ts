import { Subscription } from "./subscription";
import { Handler } from "./types";

export class Observable<T> {
    private _observers: Handler<T>[] = []

    subscribe(handler: Handler<T>) {
        this._observers.push(handler);
        return new Subscription(() => this.unsubscribe(handler))
    }

    private unsubscribe(subscription: Handler<T>) {
        const index = this._observers.indexOf(subscription);
        if (index !== -1) {
            this._observers.splice(index, 1);
        }
    }

    protected notify(value: T) {
        for (const observer of this._observers) {
            observer(value);
        }
    }
}