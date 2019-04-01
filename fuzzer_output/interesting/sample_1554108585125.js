function main() {
const v8 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = undefined;
    let v24 = undefined;
    let v26 = undefined;
    const v28 = [13.37,13.37,13.37,13.37];
    const v30 = [1337];
    const v31 = [v30];
    function v32(v33,v34,v35,v36) {
        'use strict'
        Math.valueOf = 9007199254740991;
    }
    const v43 = v32(13.37,v28,13.37,1337,v31);
}
}
%NeverOptimizeFunction(main);
main();
