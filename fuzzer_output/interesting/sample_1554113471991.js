function main() {
const v3 = Math.pow(1337,10);
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
