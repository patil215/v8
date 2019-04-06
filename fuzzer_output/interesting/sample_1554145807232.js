function main() {
let v8 = undefined;
const v11 = [NaN,NaN,NaN,NaN,NaN];
const v13 = [1337,1337,1337,1337,1337];
const v14 = [NaN,v11,Boolean];
const v17 = 1386095671 * 1.7976931348623157e+308;
const v18 = v17.toPrecision(Boolean,Boolean,v14,v13);
}
%NeverOptimizeFunction(main);
main();
