function main() {
const v4 = [1337];
const v5 = [-2147483649,v4,WeakMap,13.37];
const v6 = {from:v5};
const v8 = [v6];
let v16 = undefined;
delete v8[0];
}
%NeverOptimizeFunction(main);
main();
