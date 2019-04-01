function main() {
const v2 = [1337];
const v3 = {exec:v2};
const v6 = [1337];
const v7 = {exec:v6};
Function.__proto__ = v7;
for (const v10 in Function) {
    const v12 = {catch:v3,SQRT1_2:v10,MAX_SAFE_INTEGER:"J9.cPbxCJ6",ownKeys:BigInt,...Function,...v7,...BigInt};
}
}
%NeverOptimizeFunction(main);
main();
