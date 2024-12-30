export class Subscription {
    private teardown: () => void;

    constructor(teardown: () => void) {
        this.teardown = teardown;
    }

    unsubscribe(): void {
        this.teardown();
    }
}