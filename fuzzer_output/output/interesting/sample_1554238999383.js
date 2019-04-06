function main() {
const v2 = [13.37,13.37,13.37];
const v4 = Object(v2,1337,13.37,Object);
for (let v8 = 0; v8 < 100; v8++) {
    const v12 = [1337,1337,1337,1337];
    const v13 = [v12,1,1337];
    function v14(v15,v16,v17,v18) {
        const v21 = ArrayBuffer.isView(v17,-0.0);
        const v22 = v4 && v21;
    }
    const v23 = v14(1337,v13,"undefined");
}
}
%NeverOptimizeFunction(main);
main();
