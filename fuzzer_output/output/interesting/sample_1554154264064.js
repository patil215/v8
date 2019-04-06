function main() {
const v3 = [1337,1337,1337,1337];
const v4 = [v3,1,1337];
function v5(v6,v7,v8,v9) {
    const v14 = [13.37,13.37,13.37,13.37];
    for (let v18 = -4096; v18 < 100; v18++) {
        const v19 = 1 % v18;
        const v21 = [13.37,13.37];
        function v22(v23,v24,v25,v26) {
            return v18;
        }
        function v27(v28,v29,v30,v31) {
            return v21;
        }
        const v32 = {preventExtension:v27,get:v22,deleteProperty:v27,has:v27,defineProperty:v27,round:v22,call:v22,set:v27,ownKeys:v27,setPrototypeOf:v22,construct:v27};
        const v34 = new Proxy(v21,v32);
        const v35 = v19 + 1;
    }
}
const v36 = v5(1337,v4,"undefined");
}
%NeverOptimizeFunction(main);
main();
