function main() {
const v1 = (-268435456).__proto__;
let v4 = 0;
let v7 = 0;
const v8 = v7 + 1;
const v9 = v1.toExponential(0,v7,0,0,v7);
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
