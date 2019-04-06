function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v4 = {};
const v8 = [1337,1337,1337,1337];
const v9 = [v8,1,1337];
function v10(v11,v12,v13,v14) {
    for (let v18 = 0; v18 < 100; v18++) {
        const v20 = [13.37,13.37,13.37,13.37];
        for (let v24 = 0; v24 < 100; v24 = v24 + v4) {
            const v25 = 1 % v24;
            function v26(v27,v28,v29,v30) {
            }
            function v31(v32,v33,v34,v35) {
                return v25;
            }
            const v36 = {preventExtension:v31,get:v26,deleteProperty:v31,has:v31,defineProperty:v31,getOwnPropertyDescriptor:v26,call:v26,set:v31,ownKeys:v31,setPrototypeOf:v26,construct:v31};
        }
    }
}
const v37 = v10(1337,v9,"undefined");
}
%NeverOptimizeFunction(main);
main();
