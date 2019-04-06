function main() {
const v1 = [1337];
const v2 = [v1];
const v3 = {};
const v5 = new BigUint64Array(v2,v3);
const v8 = [-1544203427,-1544203427,-1544203427,-1544203427];
const v11 = new Int32Array(1337);
const v13 = v11.fill(-0.0,-1544203427,1,v8,1);
}
%NeverOptimizeFunction(main);
main();
