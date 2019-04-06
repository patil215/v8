function main() {
function v1(v2,v3,v4,v5) {
    const v6 = v2 instanceof v3;
    if (v6) {
    } else {
        const v7 = {getPrototypeOf:v1,deleteProperty:v1,apply:v1};
        const v9 = new Proxy(RegExp,v7);
    }
}
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v1(3086382596,Function,1337,v14,v18);
}
}
%NeverOptimizeFunction(main);
main();
