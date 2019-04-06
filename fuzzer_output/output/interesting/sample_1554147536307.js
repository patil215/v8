function main() {
const v2 = [NaN,NaN,NaN,NaN,NaN];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [NaN,v2,Boolean];
const v8 = -2574360574 && 1.7976931348623157e+308;
const v9 = v8.toFixed(Boolean,Boolean,v5,v4);
}
%NeverOptimizeFunction(main);
main();
