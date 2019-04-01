function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    function v12(v13,v14,v15,v16) {
        let v19 = 0;
        const v20 = ~"undefined";
        v19 = v20;
        const v21 = v19.__proto__;
    }
    const v27 = [1337];
    const v28 = v12(10,Function,1337,v27,Function);
}
}
%NeverOptimizeFunction(main);
main();
