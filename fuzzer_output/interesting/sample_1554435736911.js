function main() {
const v3 = [2.0,2.0,2.0,268435456];
function v5(v6,v7,v8,v9) {
}
const v13 = {get:v5,set:v5};
const v15 = Object.defineProperty(v3,268435456,v13);
const v16 = new Proxy(v3,Reflect,1337);
v16.length = 268435456;
const v18 = typeof -437397819;
const v20 = v18 === "boolean";
}
%NeverOptimizeFunction(main);
main();
