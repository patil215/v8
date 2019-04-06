function main() {
const v0 = {};
const v5 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v9 = new Uint8Array(v5);
v9[1.7976931348623157e+308] = v0;
}
%NeverOptimizeFunction(main);
main();
