function main() {
const v4 = [1337];
const v5 = [-2147483649,v4,WeakMap,13.37];
const v6 = typeof -2147483649;
const v8 = v6 === "number";
const v10 = [1337];
let v13 = undefined;
let v18 = 0;
const v19 = v5.propertyIsEnumerable(0,1,v13,1337);
}
%NeverOptimizeFunction(main);
main();
