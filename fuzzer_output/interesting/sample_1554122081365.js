function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v6 = [13.37];
    let v7 = v6;
    function v8(v9,v10,v11,v12) {
        const v14 = {get:v8};
        const v16 = Object.defineProperty(v7,"for",v14);
        v10[2] = v6;
    }
    const v18 = v8(v7,v6,100,13.37);
}
}
%NeverOptimizeFunction(main);
main();
