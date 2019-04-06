function main() {
const v8 = [1337,1337];
const v9 = [1337,v8,-1777286928];
const v11 = new Float32Array(v9);
let v14 = 0;
for (const v15 in v11) {
}
}
%NeverOptimizeFunction(main);
main();
