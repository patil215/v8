function main() {
const v3 = {};
const v4 = ~v3;
const v8 = [1337,1337,1337,1337];
const v9 = [v8,1,1337];
let v11 = undefined;
const v14 = ArrayBuffer.isView(v4,13.37);
}
%NeverOptimizeFunction(main);
main();
