function main() {
let v44 = 0;
while (v44 < 6) {
    let v47 = 0;
    while (v47 < 4) {
        function v48(v49,v50,v51) {
        }
        const v52 = v47 + 1;
        v47 = v52;
    }
    const v53 = v44 + 1;
    v44 = v53;
}
}
%NeverOptimizeFunction(main);
main();
