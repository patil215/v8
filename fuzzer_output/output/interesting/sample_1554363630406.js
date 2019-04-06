function main() {
const v5 = [-3778409626];
let v7 = undefined;
for (let v11 = 0; v11 < 100; v11++) {
    function v12(v13,v14,v15,v16) {
        const v18 = [13.37,13.37,13.37,13.37];
        for (const v19 of v18) {
            for (let v24 = 0; v24 < 3; v24++) {
                const v25 = v24 / 8;
                const v26 = v25 | v19;
                const v27 = v26.__proto__;
            }
        }
    }
    const v35 = [1337];
    const v36 = v12(10,Function,10,v35,Function);
}
}
%NeverOptimizeFunction(main);
main();
