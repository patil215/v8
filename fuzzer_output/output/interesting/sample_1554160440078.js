function main() {
const v2 = [NaN,NaN,NaN,NaN,NaN];
const v4 = [4257340759,4257340759,4257340759,4257340759,4257340759];
const v5 = [NaN,v2,Boolean];
const v8 = -536870912 * 1.7976931348623157e+308;
const v9 = v8.toPrecision(Boolean,Boolean,v5,v4);
}
%NeverOptimizeFunction(main);
main();
