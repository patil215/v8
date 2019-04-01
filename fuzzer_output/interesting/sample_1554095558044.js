function main() {
const v2 = "undefined".__proto__;
const v5 = [13.37,13.37,13.37,13.37];
const v7 = v5 instanceof Function;
const v13 = [1337];
v2.toString = v13;
}
%NeverOptimizeFunction(main);
main();
