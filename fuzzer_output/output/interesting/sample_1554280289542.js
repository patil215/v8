function main() {
function v1(v2,v3,v4,v5) {
    const v8 = new Uint8ClampedArray(32822);
    let v11 = 0;
    const v12 = v8[2147483647];
    const v13 = v11 + 1;
    if (v12) {
        const v14 = {apply:v1,getPrototypeOf:v1,call:v1,defineProperty:v1};
    } else {
    }
    v11 = v13;
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
