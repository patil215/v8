function main() {
const v5 = [1337];
const v6 = [3547325953,"object",v5,"object"];
const v7 = {localeCompare:v5};
const v8 = {NEGATIVE_INFINITY:v7,trunc:Math,concat:Math,call:v6,freeze:v5,split:13.37,codePointAt:Math,imul:v5,delete:13.37};
function v9(v10,v11,v12,v13) {
    const v14 = typeof v11;
    const v16 = v14 === "string";
    let v17 = 3547325953;
    v8[65535] = v17;
}
const v26 = [1337];
for (let v30 = 0; v30 < 100; v30++) {
    const v31 = v9(10,Function,1337,v26,Function);
}
}
%NeverOptimizeFunction(main);
main();
