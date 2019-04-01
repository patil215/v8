function main() {
const v5 = [1337,1337,1337];
const v6 = [this,13.37,"apply",v5];
const v11 = [1337,1337,1337];
const v17 = [1337];
for (let v21 = 0; v21 < 100; v21++) {
    let v23 = undefined;
    function v25(v26,v27,v28,v29) {
        with (v11) {
            const v32 = Symbol.replace;
            v6[v32] = v29;
        }
        const v34 = {max:Function,setPrototypeOf:10};
    }
    const v40 = [1337];
    const v44 = v25(10,Function,1337,v40,Function);
}
}
%NeverOptimizeFunction(main);
main();
