function main() {
let v4 = 9007199254740991;
const v5 = BigInt(v4,13.37,"undefined");
}
%NeverOptimizeFunction(main);
main();
