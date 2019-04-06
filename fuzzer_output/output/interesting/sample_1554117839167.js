function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 100; v9++) {
    let v11 = undefined;
    let v13 = "undefined";
    const v19 = [1337];
    const v24 = [13.37,13.37];
    const v26 = [1337,1337,1337];
    const v27 = [13.37,v24,13.37,v26];
    const v30 = [1337,1337];
    v30.__proto__ = v27;
    v30[0] = WeakMap;
    let v32 = "undefined";
    let v36 = 0;
    v36 = 10;
}
let v39 = 0;
let v42 = 0;
const v43 = v39 + 1;
v39 = v43;
}
%NeverOptimizeFunction(main);
main();
