function main() {
const v0 = [];
const v5 = [1337,1337,1337];
const v6 = [v5,13.37,"number",Set];
let v7 = v0;
const v8 = v7[100];
v5[3] = v8;
const v9 = v5.sort(v8,v6);
}
%NeverOptimizeFunction(main);
main();
