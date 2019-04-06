function main() {
const v1 = [];
const v6 = [9,9,9];
const v7 = [v6,13.37,"number",this];
for (const v8 of v7) {
    v8[16] = 13.37;
}
let v9 = v1;
const v10 = v9[100];
const v11 = v6.includes(v10,v7);
}
%NeverOptimizeFunction(main);
main();
