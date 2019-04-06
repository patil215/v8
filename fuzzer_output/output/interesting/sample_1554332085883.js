function main() {
let v2 = -9007199254740991;
const v3 = v2 + 1;
v2 = v3;
const v4 = [-45218.21249560581,v2,-45218.21249560581,-45218.21249560581];
const v5 = -Infinity;
const v6 = [v4,v5,v5,v5,v5];
const v8 = {atan2:-4203877410};
function v10(v11,v12,v13,v14) {
}
const v15 = v6.toLocaleString(v10,v8,-3.0);
}
%NeverOptimizeFunction(main);
main();
