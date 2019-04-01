function main() {
function v1(v2,v3,v4,v5) {
    const v8 = {max:Function,setPrototypeOf:10};
    const v10 = {max:Function,setPrototypeOf:13.37};
    const v13 = {set:v1};
    const v15 = Object.defineProperty(v8,"global",v13);
    let v16 = "undefined";
    let v18 = "undefined";
    let v22 = 0;
    const v23 = v22 + 1;
    v22 = v23;
}
const v29 = [1337];
const v33 = v1(10,Function,1337,v29,Function);
}
%NeverOptimizeFunction(main);
main();
