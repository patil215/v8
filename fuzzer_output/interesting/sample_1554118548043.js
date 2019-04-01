function main() {
const v1 = [13.37];
let v3 = "undefined";
const v7 = [1337];
const v8 = [v7];
const v10 = [1337];
let v12 = undefined;
function v13(v14,v15,v16,v17) {
    const v18 = v14 === v16;
    let v19 = v15;
    const v20 = v18 * v19;
}
for (let v24 = 0; v24 < 100; v24++) {
    const v28 = v13(v13,0);
}
}
%NeverOptimizeFunction(main);
main();
