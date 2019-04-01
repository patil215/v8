function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = {getFloat64:1337,SQRT1_2:1337,trimLeft:1337};
const v6 = {getOwnPropertyDescriptor:v2,flatMap:v5,prototype:v4,log10:"undefined",map:v5,clz32:v2};
const v8 = [];
v8[2] = 9007199254740991;
v8[1] = v6;
}
%NeverOptimizeFunction(main);
main();
