function main() {
function v1(v2,v3,v4,v5) {
    const v6 = {setPrototypeOf:v1,getPrototypeOf:v1,apply:v1};
    const v10 = {max:Function,setPrototypeOf:10};
    function v11(v12,v13,v14,v15) {
        const v16 = !v10;
        const v17 = "number" + v16;
    }
    const v23 = [1337];
    for (let v27 = 0; v27 < 100; v27++) {
        const v28 = v11(10,Function,1337,v23,Function);
    }
    let v30 = "undefined";
    let v32 = "undefined";
    let v36 = 0;
    const v37 = v36 + 1;
    v36 = v37;
}
const v43 = [1337];
for (let v47 = 0; v47 < 100; v47++) {
    const v48 = v1(10,Function,1337,v43,Function);
}
}
%NeverOptimizeFunction(main);
main();
