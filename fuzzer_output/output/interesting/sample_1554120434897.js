function main() {
const v3 = {max:Function,setPrototypeOf:10};
const v4 = v3.exec;
const v6 = {get:v4};
const v8 = Object.defineProperty(Atomics,-908550377,v6);
}
%NeverOptimizeFunction(main);
main();
