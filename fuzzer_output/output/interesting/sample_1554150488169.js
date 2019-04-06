function main() {
const v1 = {hasOwnProperty:1337};
const v2 = v1.__proto__;
v2.length = 0;
const v7 = {exec:v1};
const v11 = new Uint8Array(WeakSet,-0.0,v7);
for (const v12 in v11) {
}
}
%NeverOptimizeFunction(main);
main();
