function main() {
function v1(v2,v3,v4,v5) {
}
const v7 = {construct:v1,defineProperty:v1};
const v9 = new Proxy(Set,v7);
const v12 = v9 + 1;
}
%NeverOptimizeFunction(main);
main();
