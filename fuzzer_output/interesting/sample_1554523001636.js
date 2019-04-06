function main() {
let v3 = 0;
const v5 = [1337,1337];
const v7 = [1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    return 1337;
}
function v17(v18,v19,v20,v21,v22) {
    Function[-389108317] = Function;
    for (const v25 in Function) {
        const v28 = Function[v25];
        const v30 = {get:v8};
        const v32 = Object.defineProperty(v28,323499240,v30);
        for (let v33 = -2147483649; v33 < 5; v33 = v33 + v7) {
            const v34 = v33 >> v25;
            for (let v38 = 0; v38 < 100; v38++) {
                const v39 = v8(v38,v22,100,v34,5);
            }
        }
    }
    return "object";
}
const v41 = v17("object",1337,13.37,Math);
const v42 = v17(v5,v8,Proxy);
}
%NeverOptimizeFunction(main);
main();
