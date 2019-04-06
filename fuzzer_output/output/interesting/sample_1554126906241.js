function main() {
const v3 = [1337];
v3.__proto__ = Math;
function v4(v5,v6,v7,v8) {
    let v12 = 0;
    const v16 = v3 instanceof Function;
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v4(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
