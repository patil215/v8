function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [-2147483649,v6,WeakMap,13.37];
const v8 = {__defineGetter__:1337};
const v9 = {from:v7};
let v10 = v9;
const v13 = {preventExtensions:2353924753,defineProperty:13.37};
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    let v25 = undefined;
    function v26(v27,v28,v29,v30) {
        let v32 = v26;
        const v33 = typeof v32;
        let v36 = 0;
        do {
            const v37 = v33 + 1;
            let v39 = "undefined";
            const v40 = v13 + 1;
            v39 = v40;
            for (const v41 of v39) {
            }
            v36 = v37;
        } while (v36 < 5);
        return v4;
    }
    const v47 = [1337];
    const v48 = v26(10,Function,1337,v47,Function);
}
}
%NeverOptimizeFunction(main);
main();
