function main() {
const v2 = [13.37];
let v3 = v2;
function v4(v5,v6,v7,v8) {
    const v10 = {get:v4};
    const v12 = Object.defineProperty(v3,"for",v10);
    v6[2] = v2;
}
const v14 = [1337];
const v16 = v4(v3,v2,100,13.37);
const v18 = {set:v4};
const v20 = Object.defineProperty(v14,2482123934,v18);
}
%NeverOptimizeFunction(main);
main();
