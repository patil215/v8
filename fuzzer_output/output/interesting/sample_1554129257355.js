function main() {
function v1(v2,v3,v4,v5) {
    const v6 = v2 === v4;
    let v7 = v3;
    if (v6) {
    } else {
        for (let v11 = 0; v11 < 100; v11++) {
            const v12 = v1(v6,v5,v6,v2,v7);
        }
        Boolean.__proto__ = v5;
    }
}
const v18 = [1337];
let v27 = 0;
const v28 = v27 + 1;
v27 = v28;
const v29 = v1(10,Function,1337,v18,Function);
}
%NeverOptimizeFunction(main);
main();
