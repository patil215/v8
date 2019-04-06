function main() {
const v2 = {max:Function,setPrototypeOf:10};
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
Function[-9007199254740991] = v2;
let v9 = "undefined";
let v13 = 0;
v13 = 10;
for (const v15 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
