function main() {
let v6 = 0;
const v10 = v6 + 1;
v6 = v10;
for (let v13 = 0; v13 < 100; v13++) {
    const v16 = [13.37];
    const v18 = [1337,1337,1337,1337];
    const v19 = [1337,v16,1337,13.37];
    const v20 = {slice:"__lookupSetter__",lastIndexOf:v19,constructor:13.37,unscopables:v19,repeat:v18};
    function v25(v26,v27,v28,v29,v30) {
        const v32 = Math.fround(v20,v28);
        return v32;
    }
    const v33 = v25("compile",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
