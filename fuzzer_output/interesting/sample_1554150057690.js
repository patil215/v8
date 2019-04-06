function main() {
const v1 = [1337,1337,1337];
const v3 = new Int32Array(v1);
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
let v9 = v3;
function v10(v11,v12,v13,v14) {
    const v16 = {get:v10};
    const v18 = Object.defineProperty(v9,"for",v16);
}
const v20 = v10(1337,13.37,1337,13.37);
}
%NeverOptimizeFunction(main);
main();
