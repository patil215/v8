function main() {
const v1 = (-256).__proto__;
const v2 = (-256)[v1];
}
%NeverOptimizeFunction(main);
main();
