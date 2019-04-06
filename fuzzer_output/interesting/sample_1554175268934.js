function main() {
let v1 = 1337;
const v2 = [];
const v7 = [9,9,9];
const v8 = [v7,13.37,"number",this];
for (const v9 of v8) {
    v9[16] = v1;
}
let v10 = v2;
const v11 = v10[100];
const v12 = v7.includes(v11,v8);
}
%NeverOptimizeFunction(main);
main();
