function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = [13.37];
    let v7 = v5;
    function v8(v9,v10,v11,v12) {
        const v17 = {get:v8};
        const v19 = Object.defineProperty(v7,"for",v17);
        v10[2] = 4235416443;
    }
    const v21 = v8(v7,v5,100,13.37);
}
}
%NeverOptimizeFunction(main);
main();
