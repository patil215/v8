function main() {
function v1(v2,v3,v4,v5) {
}
const v7 = new Proxy(ArrayBuffer,v1);
for (const v8 in v7) {
}
}
%NeverOptimizeFunction(main);
main();
