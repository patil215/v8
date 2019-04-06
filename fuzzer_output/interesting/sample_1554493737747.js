function main() {
const v1 = [13.37,13.37,13.37,13.37];
function v3(v4,v5,v6,v7) {
}
const v11 = {get:v3,set:v3};
const v13 = Object.freeze(v1,2110019194,v11);
const v14 = new Proxy(v1,Reflect,1337);
v14[2110019194] = 1337;
}
%NeverOptimizeFunction(main);
main();
