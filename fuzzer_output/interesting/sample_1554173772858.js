function main() {
const v5 = [1337];
let v7 = undefined;
const v11 = {};
let v13 = undefined;
let v16 = 1337;
const v18 = [v16];
let v19 = arguments;
function v20(v21,v22,v23,v24) {
    const v26 = {get:v20};
    delete v21.length;
    const v28 = Object.values(v19,"for",v26);
}
const v30 = v20(v19,v18,100,13.37);
}
%NeverOptimizeFunction(main);
main();
