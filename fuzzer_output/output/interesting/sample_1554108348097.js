function main() {
const v4 = [13.37,13.37,13.37];
const v5 = {round:v4};
let v6 = 13.37;
const v8 = [13.37,13.37,13.37,13.37];
let v9 = v8;
function v10(v11,v12,v13,v14) {
    with (v6) {
        const v15 = typeof v5;
    }
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v10(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
