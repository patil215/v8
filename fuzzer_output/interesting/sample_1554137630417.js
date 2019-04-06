function main() {
const v1 = [1337];
const v5 = [13.37];
const v7 = [1337,1337,1337];
const v8 = [v7,13.37,"number",Set];
v7.__proto__ = v1;
const v11 = v7.concat(v5,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
