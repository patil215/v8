function main() {
function v0(v1,v2,v3,v4) {
    const v7 = new Int8Array(56343);
    let v10 = 1337;
    const v12 = [v10];
    let v13 = arguments;
    function v14(v15,v16,v17,v18) {
        const v20 = {get:v14};
        const v22 = Object.values(v13,"for",v20);
    }
    const v24 = v14(v13,v12,100,13.37);
}
const v30 = [1337];
const v31 = v0(10,Function,1337,v30,Function);
}
%NeverOptimizeFunction(main);
main();
