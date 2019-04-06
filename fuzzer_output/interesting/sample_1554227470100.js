function main() {
const v5 = [-1544203427,-1544203427,-1544203427,-1544203427];
const v8 = new Int32Array(1337);
const v10 = v8.fill(2.220446049250313e-16,-1544203427,1,v5,1);
}
%NeverOptimizeFunction(main);
main();
