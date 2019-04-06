function main() {
let v4 = 1337;
function v5(v6,v7,v8,v9) {
    const v12 = {get:v5};
    const v14 = Object.defineProperty(arguments,0,v12);
}
const v20 = [1337];
const v24 = v5(10,Function,1337,v20,Function);
let v27 = 0;
const v28 = v27 + 1;
v27 = v28;
}
%NeverOptimizeFunction(main);
main();
