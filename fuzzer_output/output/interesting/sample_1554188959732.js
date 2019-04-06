function main() {
const v1 = [13.37];
const v3 = [-1544203427,-1544203427,-1544203427,-1544203427];
const v5 = new Int32Array(v1);
const v10 = v5.fill(v5,-1544203427,1,v3,1);
}
%NeverOptimizeFunction(main);
main();
