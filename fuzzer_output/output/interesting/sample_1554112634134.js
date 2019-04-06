function main() {
const v2 = new Int16Array(43815);
let v5 = 0;
const v6 = v5 + 1;
v5 = v6;
const v15 = [1337];
let v17 = undefined;
delete v2[10];
}
%NeverOptimizeFunction(main);
main();
