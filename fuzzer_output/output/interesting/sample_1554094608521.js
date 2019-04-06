function main() {
const v8 = (1337).__proto__;
Error.__proto__ = v8;
}
%NeverOptimizeFunction(main);
main();
