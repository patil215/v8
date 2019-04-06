function main() {
function v0(v1,v2,v3,v4) {
    let v9 = "undefined";
    const v12 = {max:Function,setPrototypeOf:1337};
    const v15 = [13.37,13.37,13.37,13.37];
    let v18 = 9007199254740991;
    do {
        for (const v19 in v15) {
        }
        const v20 = v18 + 1;
        v18 = v20;
    } while (v18 < 6);
    let v23 = 0;
    do {
        const v24 = v23 + 1;
        v23 = v24;
    } while (v23 < 5);
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v0(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
