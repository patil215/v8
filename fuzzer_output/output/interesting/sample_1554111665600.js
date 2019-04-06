function main() {
const v3 = [13.37,13.37];
const v4 = ["number",RegExp,v3];
const v6 = [1337,1337,1337];
const v8 = [13.37];
let v9 = v8;
function v10(v11,v12,v13,v14) {
    const v16 = {get:v10};
    let v20 = 0;
    const v21 = v20 + 1;
    v20 = v21;
    const v22 = Object.defineProperty(v9,"for",v16);
    v9 = Function;
    v12[2] = v8;
    let v26 = 0;
    const v27 = v26 + 1;
    v26 = v27;
    const v29 = [1337];
    const v30 = [v29];
    let v33 = 0;
    const v34 = v33 + 1;
    v33 = v34;
}
const v40 = [1337];
for (let v44 = 0; v44 < 100; v44++) {
    const v45 = v10(10,Function,1337,v40,Function);
}
for (let v49 = 0; v49 < 100; v49++) {
    const v50 = v10(v4,v6,1337);
}
}
%NeverOptimizeFunction(main);
main();
