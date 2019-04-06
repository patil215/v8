function main() {
let v1 = "undefined";
const v3 = [4294967295,4294967295,4294967295,4294967295,4294967295];
const v5 = [13.37];
const v8 = new Int16Array(v3,8154,v5);
}
%NeverOptimizeFunction(main);
main();
