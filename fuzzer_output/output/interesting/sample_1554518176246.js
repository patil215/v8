function main() {
const v3 = [1337,1337];
const v5 = [1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
}
function v15(v16,v17,v18,v19,v20) {
    Function[-389108317] = Function;
    for (const v23 in Function) {
        const v26 = Function[v23];
        const v28 = {get:v6};
        const v30 = Object.defineProperty(v26,323499240,v28);
        for (let v31 = 0; v31 < 5; v31 = v31 + v5) {
            const v32 = v31 >> v23;
            for (let v36 = 0; v36 < 100; v36++) {
                const v37 = v6(v36,v20,100,v32,5);
            }
        }
    }
}
const v39 = v15("object",1337,13.37,Math);
const v40 = v15(v3,v6,Proxy);
}
%NeverOptimizeFunction(main);
main();
