function main() {
function v0(v1,v2,v3,v4) {
    const v7 = {max:Function,setPrototypeOf:1337};
    v7.length = v1;
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        v10 = v11;
        for (let v15 = 0; v15 < 100; v15++) {
        }
        v7.valueOf = v0;
    } while (v10 < 9);
}
const v21 = [1000];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v0(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
