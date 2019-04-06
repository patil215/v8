function main() {
const v5 = [1337];
let v7 = undefined;
const v12 = [13.37,13.37];
let v13 = v12;
const v15 = Symbol.iterator;
v13[10] = v15;
const v19 = Symbol.lastIndexOf;
let v20 = v13;
const v21 = v20.toLocaleString(2147483649,v19);
const v24 = [1337,String];
}
%NeverOptimizeFunction(main);
main();
