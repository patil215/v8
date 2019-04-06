function main() {
function v2(v3,v4,v5,v6) {
}
const v8 = {get:v2};
const v10 = new Proxy(v8,Reflect,1337);
v10[0] = 1337;
}
%NeverOptimizeFunction(main);
main();
