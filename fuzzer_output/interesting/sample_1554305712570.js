function main() {
const v3 = [-1000000000.0,-1000000000.0,1];
const v8 = [9007199254740993,9007199254740993,Symbol,9007199254740993,-1.7976931348623157e+308];
const v9 = new Uint16Array(v8,-1.7976931348623157e+308);
const v10 = v9.includes(-1000000000.0,v3,1337);
}
%NeverOptimizeFunction(main);
main();
