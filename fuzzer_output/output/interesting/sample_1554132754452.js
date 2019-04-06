function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [13.37];
    const v9 = "undefined" <= 10;
    const v20 = [v2,13.37,13.37,13.37];
    for (const v21 of v20) {
        const v23 = arguments.__proto__;
        let v26 = 0;
        do {
            const v27 = v23.__proto__;
            const v28 = v26 + 1;
            v26 = v28;
        } while (v26 < 4);
    }
}
const v33 = [Function];
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v0(10,Function,1337,v33,Function);
}
}
%NeverOptimizeFunction(main);
main();
