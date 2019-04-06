function main() {
const v1 = {prototype:1860683677};
function v3(v4,v5,v6,v7) {
    for (let v11 = 0; v11 < 100; v11++) {
        const v13 = 7 && v1;
        const v16 = Math.clz32(v4,0);
        v16[9] = v13;
    }
}
const v21 = [1337];
const v22 = v3(10,Function,1337,v21,Promise);
}
%NeverOptimizeFunction(main);
main();
