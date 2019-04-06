function main() {
const v0 = {};
function v1(v2,v3,v4,v5) {
    let v8 = 1337;
    const v10 = [v8];
    let v11 = arguments;
    function v12(v13,v14,v15,v16) {
        const v18 = {get:v12};
        const v20 = Object.values(v11,"for",v18);
    }
    arguments[2492620336] = v12;
    const v22 = v12(v11,v10,100,13.37);
}
const v23 = v1(v0,v0);
}
%NeverOptimizeFunction(main);
main();
