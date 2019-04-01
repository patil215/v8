function main() {
function v0(v1,v2,v3,v4) {
}
const v5 = {set:v0};
const v7 = [13.37,v5,13.37,13.37,13.37];
function v8(v9,v10,v11,v12) {
    let v15 = 0;
    do {
        let v18 = 0;
        const v20 = 13.37 + 1;
        v18 = v20;
        const v21 = v15 + 1;
        v15 = v21;
        const v28 = Object.seal(arguments,-4096);
    } while (v15 < 4);
}
const v34 = [1337];
const v35 = v8(10,Function,1337,v34,Function);
}
%NeverOptimizeFunction(main);
main();
