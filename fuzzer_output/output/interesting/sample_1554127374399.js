function main() {
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v7 = [13.37];
function v14(v15,v16,v17,v18,v19) {
    let v21 = undefined;
    function v22(v23,v24,v25,v26) {
        const v27 = ~v23;
    }
    const v33 = v22(Atomics,1337,1337,1337);
    const v37 = [1337];
    const v41 = v22(10,Function,1337,v37,Function);
}
for (let v51 = 0; v51 < 100; v51++) {
    const v52 = v14("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
