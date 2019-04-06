function main() {
const v4 = [1337,1337,1337,1337];
const v5 = [1337,13.37,13.37,"V0f2aCAx+C"];
const v6 = {acos:1337,isSealed:1337,unscopables:Reflect,concat:v5};
const v10 = [13.37,13.37,13.37,13.37,13.37];
const v12 = v6 != v4;
const v14 = Symbol.isConcatSpreadable;
Math[v14] = v4;
const v15 = [1337,1337,v10];
const v16 = [v10];
const v17 = {getFloat32:v16,push:"CmfGB9PQPJ",delete:"CmfGB9PQPJ",lastMatch:1337,bind:Math,ceil:v10,toString:v10,map:v15,acosh:v15};
const v21 = [13.37];
const v23 = [1337,1337,1337];
const v24 = [v23,v17,"number",Set];
const v27 = v23.concat(v21,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
