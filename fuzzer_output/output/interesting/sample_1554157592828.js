function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [-9007199254740992,v5];
const v9 = new Uint16Array(v7);
for (const v10 in v9) {
}
}
%NeverOptimizeFunction(main);
main();
