function main() {
let v1 = 1337;
const v3 = [v1];
let v4 = v3;
function v5(v6,v7,v8,v9) {
    v7[257] = v8;
    const v11 = {get:v5};
    const v13 = Object.values(v4,"for",v11);
}
const v15 = v5(v4,v3,100,13.37);
}
%NeverOptimizeFunction(main);
main();
