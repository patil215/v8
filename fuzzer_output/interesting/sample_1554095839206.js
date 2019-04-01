function main() {
const v1 = [1337];
const v2 = {exec:v1};
const v5 = {max:Function,setPrototypeOf:10};
const v9 = {set:Function};
const v11 = Object.defineProperty(v2,129,v9);
const v14 = {set:BigUint64Array};
const v16 = Object.defineProperty(Function,"has",v14);
let v19 = 0;
const v20 = v19 + 1;
v19 = v20;
}
%NeverOptimizeFunction(main);
main();
