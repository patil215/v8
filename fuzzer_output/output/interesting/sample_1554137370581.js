function main() {
const v1 = [13.37];
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
let v6 = v1;
const v8 = [4294967295,4294967295,4294967295,v6,4294967295];
const v10 = [13.37];
const v13 = new Int16Array(v8,8154,v10);
}
%NeverOptimizeFunction(main);
main();
