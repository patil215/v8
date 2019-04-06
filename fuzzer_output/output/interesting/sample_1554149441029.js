function main() {
const v0 = {};
let v1 = v0;
let v3 = "undefined";
for (let v8 = 0; v8 < 100; v8++) {
    function v14(v15,v16,v17,v18,v19) {
        const v20 = v18.imul(undefined,v1,1337);
    }
    const v21 = v14("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
