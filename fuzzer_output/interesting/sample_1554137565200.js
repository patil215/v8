function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v8 = [13.37];
const v10 = [1337,1337,1337];
const v11 = [v10,13.37,"number",Set];
for (const v12 of v11) {
    v12[2147483648] = v12;
}
const v15 = v10.concat(v8,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
