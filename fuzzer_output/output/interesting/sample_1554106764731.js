function main() {
const v5 = [1337];
const v6 = [3547325953,"object",v5,3547325953];
const v7 = {localeCompare:v5};
const v8 = {NEGATIVE_INFINITY:v7,trunc:Math,concat:Math,call:v6,freeze:v5,split:13.37,codePointAt:Math,imul:v5,delete:13.37};
function v9(v10,v11,v12,v13) {
    const v15 = [1337];
    const v16 = [v15];
    v8[v10] = v16;
}
const v22 = [1337];
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v9(10,Function,1337,v22,Function);
}
}
%NeverOptimizeFunction(main);
main();
