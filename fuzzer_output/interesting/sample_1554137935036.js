function main() {
let v4 = 16;
const v6 = [4294967295,4294967295,v4,4294967295,4294967295];
const v8 = [13.37];
const v11 = new Int16Array(v6,8154,v8);
}
%NeverOptimizeFunction(main);
main();
