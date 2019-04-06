function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v5 = [1337];
const v6 = {exec:v5};
const v10 = new Uint8Array(RegExp,-0.0,v6);
const v15 = [13.37];
const v17 = [1337,1337,1337];
const v18 = [v17,13.37,"number",Set];
for (const v19 of v18) {
    v19[2147483648] = v19;
    v19[1024] = Set;
}
const v22 = v17.concat(v15,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
