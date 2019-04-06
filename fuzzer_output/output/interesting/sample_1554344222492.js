function main() {
const v1 = {};
const v3 = new Proxy(Object,v1);
const v5 = [1337,1337,1337,1337,1337];
const v12 = [1337];
let v17 = undefined;
const v18 = new v3(Function,-65536,v5,10);
v17 = v18;
v3.__proto__ = v17;
}
%NeverOptimizeFunction(main);
main();
