function main() {
const v5 = [1337];
let v10 = undefined;
const v13 = Symbol.match;
const v14 = Object[v13];
const v15 = [];
const v20 = [1337,v14,1337];
const v21 = [v20,13.37,"number",Set];
let v22 = v15;
const v23 = v22[100];
v20[10] = v23;
const v24 = v20.sort(v23,v21);
}
%NeverOptimizeFunction(main);
main();
