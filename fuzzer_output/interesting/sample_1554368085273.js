function main() {
const v1 = [5.0,5.0,5.0,5.0];
function v3(v4,v5,v6,v7) {
}
const v11 = {get:v3,set:v3};
const v13 = Object.preventExtensions(v1,"asin",v11);
const v14 = new Proxy(v1,Reflect,1337);
const v15 = v14.__proto__;
}
%NeverOptimizeFunction(main);
main();
