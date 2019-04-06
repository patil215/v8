function main() {
let v3 = 13.37;
const v6 = new BigUint64Array(v3,0,Math,1337,v3);
const v7 = v6 + 1;
}
%NeverOptimizeFunction(main);
main();
