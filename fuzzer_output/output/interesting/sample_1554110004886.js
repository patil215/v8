function main() {
const v3 = [1337];
const v4 = [v3];
function v6(v7,v8,v9,v10) {
    'use strict'
    for (let v14 = 0; v14 < 5; v14++) {
        const v16 = [1337,1337,1337];
        delete v16[2];
    }
}
const v18 = v6(10,13.37,..."undefined",...v4,9007199254740991);
}
%NeverOptimizeFunction(main);
main();
