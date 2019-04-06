function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [v2,"*rBqVy//Sg",1337,"*rBqVy//Sg"];
let v6 = v5;
function v7(v8,v9,v10,v11) {
    let v14 = 0;
    while (v14 < 3) {
        const v15 = v6 - 1;
        const v16 = v14 + 1;
        v14 = v16;
    }
    let v19 = 0;
    do {
        let v22 = 0;
        do {
            const v23 = v4 << v6;
            const v24 = v22 + 1;
            v22 = v24;
        } while (v22 < 10);
        const v25 = v19 + 1;
        v19 = v25;
    } while (v19 < 4);
}
v6 = 1337;
const v31 = [1337];
for (let v35 = 0; v35 < 100; v35++) {
    const v36 = v7(10,Function,1337,v31,Function);
}
}
%NeverOptimizeFunction(main);
main();
