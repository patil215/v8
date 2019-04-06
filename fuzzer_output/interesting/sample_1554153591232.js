function main() {
let v5 = 0;
for (let v13 = 0; v13 < 100; v13++) {
    const v16 = [1337];
    function v18(v19,v20,v21,v22,v23) {
        const v24 = v19 % 9;
        v24.constructor = 1337;
    }
    for (const v26 of v16) {
        const v27 = typeof v26;
        const v28 = v27 <= 10;
        const v29 = v18(v26,Function,v28,13.37,0);
    }
}
let v34 = 0;
const v35 = v34 + 1;
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
