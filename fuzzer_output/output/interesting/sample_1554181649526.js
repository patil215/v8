function main() {
const v3 = "undefined" << "undefined";
let v4 = "undefined";
const v6 = [13.37,13.37];
const v9 = [13.37,13.37];
const v11 = Symbol.unscopables;
const v12 = v9[v11];
const v13 = [1337,1337,1337,1337];
const v14 = [v13,1337,13.37];
const v15 = {atan:13.37,stackTraceLimit:v6,add:"undefined",prototype:13.37};
const v16 = {NaN:1337};
let v17 = 13.37;
const v19 = [1337,1337,1337];
const v25 = [v19];
let v27 = undefined;
for (let v30 = 0; v30 < 1337; v30++) {
    const v31 = 1 - v30;
    const v32 = [v31];
    let v33 = v32;
    const v38 = [1337,1337,1337];
    const v39 = {};
    const v40 = [v38,13.37,"number",Set];
    for (const v41 of v40) {
        v41[v33] = v41;
    }
}
}
%NeverOptimizeFunction(main);
main();
