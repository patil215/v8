function main() {
function v0(v1,v2,v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    v7 = v8;
    const v12 = Object.seal(arguments,-4096);
}
const v18 = [1337];
const v22 = v0(10,Function,1337,v18,Function);
}
%NeverOptimizeFunction(main);
main();
