function main() {
let v7 = undefined;
const v8 = Math.cbrt(undefined,9007199254740991,132538313);
}
%NeverOptimizeFunction(main);
main();
