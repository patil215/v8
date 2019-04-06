function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v5 = [1337];
const v6 = {exec:v5};
const v10 = new Uint8Array(RegExp,-0.0,v6);
for (const v11 in v10) {
}
}
%NeverOptimizeFunction(main);
main();
