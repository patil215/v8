function main() {
let v3 = -2;
const v4 = v3 || v3;
const v7 = [1337,13.37,13.37,"V0f2aCAx+C"];
const v8 = {acos:1337,isSealed:1337,unscopables:Reflect,concat:v7};
const v9 = [];
const v14 = [1337,v8,v4];
const v15 = [v14,13.37,"number",Set];
let v16 = v9;
const v17 = v16[100];
const v18 = v14.sort(v17,v15);
}
%NeverOptimizeFunction(main);
main();
