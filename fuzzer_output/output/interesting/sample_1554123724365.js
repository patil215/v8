function main() {
const v1 = [1337];
const v2 = v1.__proto__;
function v3(v4,v5,v6,v7) {
}
const v15 = {set:v3};
const v17 = Object.defineProperty(v2,"reduce",v15);
}
%NeverOptimizeFunction(main);
main();
