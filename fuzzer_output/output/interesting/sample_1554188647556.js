function main() {
function v2(v3,v4) {
    v3.prototype = 1000.0;
    return v2;
}
const v9 = [13.37,Object];
const v10 = v2(v2,v9,13.37);
const v12 = [13.37,13.37,13.37,13.37,13.37];
function v13(v14,v15,v16,v17) {
    const v19 = {set:v2,get:v13};
    const v21 = Object.defineProperty(v10,"BYTES_PER_ELEMENT",v19);
    v21[10000] = v15;
    let v27 = 0;
    const v28 = v27 + 1;
    v27 = v28;
}
const v34 = [1337];
const v35 = v13(-2147483649,Function,1337,v34,Function);
}
%NeverOptimizeFunction(main);
main();
