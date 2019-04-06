function main() {
const v2 = 3 || NaN;
const v5 = new Uint8Array(3);
const v6 = v5.includes(v2,v5,v5,v5);
}
%NeverOptimizeFunction(main);
main();
