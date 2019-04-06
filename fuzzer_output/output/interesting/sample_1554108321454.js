function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [v5];
const v7 = [v6];
const v8 = {exec:v7};
const v11 = [1337];
const v12 = {exec:v11};
let v15 = 0;
const v16 = v15 + 1;
v15 = v16;
const v18 = [13.37,13.37,13.37,13.37];
const v20 = [1337];
const v21 = new ArrayBuffer(v8,v12,v18,1337,v3);
const v22 = [v20];
}
%NeverOptimizeFunction(main);
main();
