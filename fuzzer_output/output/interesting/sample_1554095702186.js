function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v6];
const v8 = {max:Function,setPrototypeOf:10};
const v9 = {exec:v6};
let v10 = "undefined";
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337];
const v18 = [v17];
const v19 = {max:Function,setPrototypeOf:10};
const v20 = {exec:v17};
let v21 = "undefined";
(13.37).length = 2;
Function[1337] = "undefined";
const v32 = {max:2,setPrototypeOf:10};
const v41 = 10 - v32;
const v42 = {};
const v43 = [v42,v42,v42];
Function[10] = Function;
for (const v47 in Function) {
}
for (const v49 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
