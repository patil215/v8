function main() {
const v5 = [1337];
let v9 = 0;
let v12 = 0;
with (v12) {
    __lookupSetter__ = 1337;
}
const v13 = v12 + 1;
v12 = v13;
const v14 = v9 + 1;
v9 = v14;
for (let v18 = 0; v18 < 100; v18++) {
    let v20 = undefined;
    const v23 = new Float64Array(47568);
    let v25 = 0;
    const v26 = v25 + 1;
    const v27 = v26.constructor(v26,v23,47568);
}
const v29 = [1337];
const v30 = [v29];
}
%NeverOptimizeFunction(main);
main();
