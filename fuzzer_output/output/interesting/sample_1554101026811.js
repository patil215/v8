function main() {
let v3 = 0;
const v5 = v3.__defineGetter__(10,Function,10);
}
%NeverOptimizeFunction(main);
main();
