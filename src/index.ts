import { Subject } from "./Observer/subject";
import { Calculator } from "./concretes/calculator";
import { ExternalSource } from "./concretes/externalSource";

function main() {
    const calculator = new Calculator();
    const externalSource = new ExternalSource();
    const dataReceiverHub = new Subject<number>();

    const sub1 = dataReceiverHub.subscribe(
        (data: number) => console.log(`Data in hub: ${data}`)
    );

    const sub2 = calculator.subscribe(
        (val) => dataReceiverHub.notify(val)
    );

    const sub3 = externalSource.subscribe(
        (val) => dataReceiverHub.notify(val)
    );

    calculator.intensiveCalculation();
    externalSource.emitValue(10);

    sub1.unsubscribe();
    sub2.unsubscribe();
    sub3.unsubscribe();
}

main();
