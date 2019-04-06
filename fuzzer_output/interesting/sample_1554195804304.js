function main() {
function v1(v2,v3,v4,v5) {
}
const v7 = {get:v1};
const v9 = new Proxy(v7,Reflect,1337);
const v10 = v1 > v9;
}
%NeverOptimizeFunction(main);
main();
