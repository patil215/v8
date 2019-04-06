function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [v4,v4,-4267643975,v2];
const v7 = new Float32Array(v2);
let v10 = 0;
let v11 = v7;
const v12 = v10 + 1;
const v13 = new Uint32Array(v11,v11,v12,v12,v5);
}
%NeverOptimizeFunction(main);
main();
