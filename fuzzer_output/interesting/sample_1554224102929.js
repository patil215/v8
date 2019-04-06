function main() {
function v5(v6,v7,v8,v9) {
    const v10 = typeof "__defineGetter__";
    function v11(v12,v13,v14,v15) {
        return v11;
    }
    const v16 = {set:v11};
    const v18 = Object.is(v10,v11,v16);
    return v18;
}
const v23 = [13.37];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v5(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
