function main() {
const v5 = [1337,13.37,13.37,"isSealed"];
const v6 = {acos:1337,isSealed:1337,unscopables:Reflect,concat:v5};
function v7(v8,v9,v10,v11) {
    let v13 = "undefined";
    for (const v14 in v13) {
        for (let v18 = 0; v18 < 100; v18++) {
            function v20(v21,v22,v23,v24) {
                for (const v25 of v24) {
                }
                return v18;
            }
            const v30 = [this];
            const v31 = v20(10,Function,1337,v30,Function);
        }
    }
}
const v33 = v7(127,"isSealed",v6,-2,"isSealed",v6);
}
%NeverOptimizeFunction(main);
main();
