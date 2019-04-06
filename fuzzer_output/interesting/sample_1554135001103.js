function main() {
const v2 = [13.37,Function,13.37,13.37];
const v6 = [1337];
let v7 = v6;
function v8(v9,v10,v11,v12) {
    v10[1] = v2;
    const v14 = {get:v8};
    const v16 = Object.values(v7,"for",v14);
}
const v18 = v8(v7,v6,100,13.37);
}
%NeverOptimizeFunction(main);
main();
