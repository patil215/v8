function main() {
const v1 = [1337,1337,1337,1337];
function v2(v3,v4,v5,v6) {
    const v9 = new Uint8ClampedArray(v6);
    v9[0] = 32822;
}
const v15 = [1337];
const v18 = v2(10,Function,1337,v15,Function);
const v19 = v2(0,v1);
}
%NeverOptimizeFunction(main);
main();
