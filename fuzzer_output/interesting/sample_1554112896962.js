function main() {
let v1 = "undefined";
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v7 = [1337];
function v8(v9,v10,v11,v12) {
    for (let v16 = 0; v16 < 100; v16++) {
        const v18 = [1337];
        const v21 = [13.37,13.37,13.37,13.37];
        const v22 = [...v21,Function,...v18,...v7];
    }
}
const v28 = [1337];
const v29 = v8(10,Function,1337,v28,Function);
}
%NeverOptimizeFunction(main);
main();
