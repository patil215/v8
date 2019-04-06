function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
}
function v7(v8,v9,v10,v11) {
}
const v13 = new Proxy(v1,v2);
const v15 = {set:v7};
const v17 = Object.defineProperty(v13,-9007199254740993,v15);
const v18 = v13 instanceof Object;
}
%NeverOptimizeFunction(main);
main();
