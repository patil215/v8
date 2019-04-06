function main() {
let v2 = 0;
const v3 = v2.__proto__;
const v4 = v3.toFixed(v3,0);
const v5 = v2 + 1;
v2 = v5;
let v8 = 0;
const v9 = v8 + 1;
v8 = v9;
}
%NeverOptimizeFunction(main);
main();
