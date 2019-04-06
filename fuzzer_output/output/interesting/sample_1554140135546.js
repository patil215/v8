function main() {
const v2 = ["ceil"];
const v3 = v2.cosh;
const v5 = {get:v3};
const v7 = Object.isFrozen(RegExp,"E",v5);
}
%NeverOptimizeFunction(main);
main();
