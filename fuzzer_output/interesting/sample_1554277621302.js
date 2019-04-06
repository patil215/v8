function main() {
const v1 = {};
let v2 = 100;
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [v1,16,16,16,16];
const v8 = [13.37,v5,Boolean];
const v10 = (1.7976931348623157e+308).toPrecision(v2,Boolean,v8,v7);
}
%NeverOptimizeFunction(main);
main();
