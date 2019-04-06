function main() {
let v3 = undefined;
let v6 = 0;
const v10 = v6 + 1;
v6 = v10;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = v12.log2;
const v15 = [1337];
const v16 = [];
const v17 = v15.constructor(9007199254740991,v16,v3,v14,9007199254740991);
}
%NeverOptimizeFunction(main);
main();
