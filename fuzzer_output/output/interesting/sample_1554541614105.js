function main() {
const v3 = typeof 8;
arguments.length = -9007199254740991;
const v6 = v3 === "string";
let v7 = v6;
function v8(v9,v10) {
}
v7 = v8;
const v11 = v7.apply(Proxy,arguments);
}
%NeverOptimizeFunction(main);
main();
