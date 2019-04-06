function main() {
const v2 = {hasOwnProperty:1337};
const v4 = v2.__proto__;
v4[1337] = 13.37;
const v6 = new Uint16Array(WeakMap);
for (const v7 in v6) {
}
}
%NeverOptimizeFunction(main);
main();
