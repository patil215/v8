function main() {
let v1 = 2.2250738585072014e-308;
const v4 = [4294967295,4294967295,4294967295,4294967295,v1];
v4.length = 1337;
const v8 = new Int16Array(v4,8154,2093446874);
}
%NeverOptimizeFunction(main);
main();
