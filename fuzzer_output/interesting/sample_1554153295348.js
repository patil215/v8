function main() {
const v1 = [];
const v6 = [1337,1337,0];
const v7 = [v6,13.37,"number",Set];
let v8 = v1;
const v9 = v8[100];
const v10 = v6.sort(v9,v7);
}
%NeverOptimizeFunction(main);
main();
