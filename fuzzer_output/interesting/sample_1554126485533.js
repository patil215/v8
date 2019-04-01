function main() {
const v1 = "undefined".__proto__;
v1[2966170018] = v1;
let v7 = 0;
}
%NeverOptimizeFunction(main);
main();
