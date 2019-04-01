function main() {
let v5 = undefined;
const v9 = (1.0).toString(undefined,1337);
}
%NeverOptimizeFunction(main);
main();
