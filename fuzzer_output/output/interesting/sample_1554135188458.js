function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 685873.5511442542;
const v4 = {exec:v1};
const v8 = new Uint8Array(WeakSet,-0.0,v4);
for (const v9 in v8) {
}
}
%NeverOptimizeFunction(main);
main();
