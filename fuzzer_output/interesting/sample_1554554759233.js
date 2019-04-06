function main() {
let v1 = 13.37;
const v5 = new Uint32Array(parseFloat);
const v6 = v5.indexOf(v1,1337);
}
%NeverOptimizeFunction(main);
main();
