function main() {
function v0(v1,v2,v3,v4) {
    const v10 = "undefined" + 13.37;
    const v12 = {max:v10,setPrototypeOf:10};
    function v13(v14,v15,v16,v17) {
    }
    const v23 = [1337];
    for (let v27 = 0; v27 < 100; v27++) {
        const v28 = v13(10,Function,1337,v23,Function);
    }
}
const v35 = [1337];
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v0(10,Function,1337,v35,Function);
}
}
%NeverOptimizeFunction(main);
main();
