function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,v2,1337,13.37];
const v6 = {slice:"__lookupSetter__",lastIndexOf:v5,constructor:13.37,unscopables:v5,repeat:v4};
function v11(v12,v13,v14,v15,v16) {
    const v18 = Math.fround(v6,v14);
}
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v11("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
