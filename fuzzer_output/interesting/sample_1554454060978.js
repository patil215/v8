function main() {
const v1 = [1337,1337,1337,1337,1337];
const v2 = [v1];
const v5 = new Float32Array(36344);
const v10 = [v2];
let v15 = undefined;
const v17 = new Uint8Array(v5);
}
%NeverOptimizeFunction(main);
main();
