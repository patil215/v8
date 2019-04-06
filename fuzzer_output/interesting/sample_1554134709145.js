function main() {
const v2 = {hasOwnProperty:1337};
let v6 = 0;
const v11 = [1337];
let v16 = undefined;
const v20 = v2.__proto__;
v20[1337] = 13.37;
const v23 = [1337];
const v24 = {exec:v23};
const v28 = new Uint8Array(Function,-0.0,v24);
for (const v32 in v28) {
}
}
%NeverOptimizeFunction(main);
main();
