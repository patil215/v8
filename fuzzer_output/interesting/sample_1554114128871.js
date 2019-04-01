function main() {
const v2 = [1337,1337,1337,1337];
let v3 = 13.37;
const v5 = [13.37,13.37];
const v7 = [1337];
const v8 = {PI:1337,hypot:v7,trimStart:v5};
const v9 = {setPrototypeOf:v3,apply:v8,deleteProperty:v3,ownKeys:v2};
const v11 = new Proxy(v7,v9);
function v18(v19,v20,v21,v22,v23) {
    function v24(v25,v26,v27,v28) {
        const v30 = [13.37,13.37,13.37,13.37];
        v30[10] = v27;
        return v21;
    }
    const v36 = [1337];
    for (let v40 = 0; v40 < 100; v40++) {
        const v41 = v24(10,Function,1337,v36,Function);
        const v42 = v24(v23,v24,v41,v18,v8);
    }
}
const v45 = v18(1337,Math,9007199254740991,9007199254740991);
const v46 = v18(100,3,v8);
const v47 = v18(v46,v5,0,13.37,13.37,v11);
}
%NeverOptimizeFunction(main);
main();
