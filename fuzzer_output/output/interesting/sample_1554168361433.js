function main() {
const v2 = [13.37,13.37,13.37];
const v4 = Object(v2,1337,13.37,Object);
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
for (let v12 = 0; v12 < 100; v12++) {
    const v16 = [1337,1337,1337,1337];
    const v17 = [v16,1,1337];
    function v18(v19,v20,v21,v22) {
        const v25 = [13.37,13.37,13.37,13.37,13.37];
        const v26 = ArrayBuffer.isView(v25,13.37);
        const v27 = v4 && v26;
    }
    const v28 = v18(1337,v17,"undefined");
}
}
%NeverOptimizeFunction(main);
main();
