function main() {
const v1 = [-1544203427,-1544203427,-1544203427,-1544203427];
const v4 = new Int32Array(1337);
const v6 = v4.fill(v4,-1544203427,128,v1,128);
}
%NeverOptimizeFunction(main);
main();
