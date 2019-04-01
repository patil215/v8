function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v5 = [1337];
const v6 = [v5];
const v9 = new Uint16Array(6917);
const v10 = 6917 < 1337;
v9[Uint16Array] = v10;
}
%NeverOptimizeFunction(main);
main();
