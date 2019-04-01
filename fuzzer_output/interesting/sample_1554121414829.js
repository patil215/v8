function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
function v4(v5,v6,v7,v8) {
    let v10 = "undefined";
    for (let v14 = 0; v14 < 5; v14++) {
        const v17 = {max:Function,setPrototypeOf:10};
        const v18 = v17.__proto__;
        v18.message = v14;
    }
    const v20 = [13.37];
    const v22 = {get:v4};
    const v24 = Object.defineProperty(v20,"abs",v22);
}
const v33 = [1337];
const v34 = v4(10,Function,1337,v33,Function);
}
%NeverOptimizeFunction(main);
main();
