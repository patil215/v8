function main() {
const v6 = [1337];
const v7 = [3547325953,"object",v6,3547325953];
const v8 = {localeCompare:v6};
const v9 = {NEGATIVE_INFINITY:v8,trunc:Math,concat:Math,call:v7,freeze:v6,split:13.37,codePointAt:Math,imul:v6,delete:13.37};
function v10(v11,v12,v13,v14) {
    const v15 = 1337 | v13;
    const v17 = [1337];
    const v18 = [v17];
    v9[v11] = v18;
}
const v28 = [1337];
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v10(10,Function,1337,v28,Function);
}
}
%NeverOptimizeFunction(main);
main();
