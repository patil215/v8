function main() {
const v6 = [13.37];
const v9 = [13.37];
const v11 = [1337,1337];
const v12 = [v9,"*rBqVy//Sg",1337,"*rBqVy//Sg"];
let v13 = v12;
function v14(v15,v16,v17,v18) {
    let v21 = 0;
    while (v21 < 3) {
        const v22 = v21 + 1;
        v21 = v22;
    }
    let v25 = 0;
    do {
        let v28 = 0;
        do {
            const v29 = 4 << v13;
            const v30 = v28 + 1;
            v28 = v30;
        } while (v28 < 10);
        const v31 = v25 + 1;
        v25 = v31;
        const v32 = v6.__proto__;
        let v35 = 0;
        do {
            const v36 = v6.asyncIterator;
            const v37 = v35 + 1;
            v35 = v37;
        } while (v35 < 10);
    } while (v25 < 4);
}
const v44 = [1337];
for (let v48 = 0; v48 < 100; v48++) {
    const v49 = v14(10,Function,1337,v44,Function);
}
v6.__proto__ = Function;
const v50 = v14(1,v11);
}
%NeverOptimizeFunction(main);
main();
