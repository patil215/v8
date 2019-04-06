function main() {
const v2 = [13.37];
let v3 = v2;
function v4(v5,v6,v7,v8) {
    const v10 = {get:v4};
    const v12 = Object.defineProperty(v3,"for",v10);
    v6[2] = v2;
}
const v18 = [1337];
const v22 = v4(10,Function,1337,v18,Function);
const v26 = v4(v3,v2,100,13.37);
}
%NeverOptimizeFunction(main);
main();
