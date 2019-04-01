function main() {
const v23 = [1337];
const v24 = [-2147483649,v23,WeakMap,13.37];
const v25 = {from:v24};
let v40 = 0;
with (v25) {
    function v49(v50,v51,v52) {
    }
    const v58 = v49(1,1337);
}
}
%NeverOptimizeFunction(main);
main();
