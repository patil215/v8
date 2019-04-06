function main() {
const v3 = [1337];
const v4 = [v3];
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = [13.37];
    let v14 = v13;
    v14.length = 0;
    let v18 = undefined;
    v13[2] = v13;
}
const v20 = v6(10,13.37,..."undefined",...v4,9007199254740991);
}
%NeverOptimizeFunction(main);
main();
