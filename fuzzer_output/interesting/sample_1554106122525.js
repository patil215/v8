function main() {
function v0(v1,v2,v3,v4) {
    const v10 = [13.37,13.37,13.37,13.37];
    let v11 = "undefined";
    const v13 = {set:v0};
    const v15 = Object.defineProperty(v10,0,v13);
}
const v22 = [1337];
const v26 = v0(10,Function,1337,v22,Function);
let v29 = 0;
const v30 = v29 + 1;
v29 = v30;
}
%NeverOptimizeFunction(main);
main();
