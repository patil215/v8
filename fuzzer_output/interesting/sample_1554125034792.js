function main() {
let v4 = 1337;
const v5 = [];
v4 = v5;
function v8(v9,v10,v11,v12,v13) {
    let v15 = undefined;
    for (let v19 = 0; v19 < 5; v19++) {
        function v20(v21,v22,v23,v24) {
            let v26 = "undefined";
            const v27 = v19[v26];
        }
        const v33 = [1337];
        for (let v37 = 0; v37 < 100; v37++) {
            const v38 = v20(10,Function,1337,v33,Function);
        }
        const v39 = v4[3899815003];
    }
}
const v43 = v8("undefined",1337,13.37,Math);
let v46 = 0;
const v47 = v46 + 1;
v46 = v47;
}
%NeverOptimizeFunction(main);
main();
