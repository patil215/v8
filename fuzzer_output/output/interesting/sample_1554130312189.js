function main() {
let v3 = 0;
const v4 = v3 + 1;
v3 = v4;
let v7 = 0;
let v10 = 0;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [13.37,13.37,13.37,v12];
function v17(v18,v19,v20,v21) {
    for (let v25 = 0; v25 < 100; v25++) {
        function v26(v27,v28,v29,v30) {
            const v32 = Error();
        }
        const v34 = v26(v21,1,v18,10);
    }
}
const v37 = v17(1337,10,1337,"object",v15);
}
%NeverOptimizeFunction(main);
main();
