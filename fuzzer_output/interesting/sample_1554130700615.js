function main() {
let v2 = 13.37;
const v6 = [1337];
const v7 = [v6];
function v9(v10,v11,v12,v13) {
    'use strict'
    const v15 = [13.37];
    v15[1027681417] = v15;
}
const v17 = v9(2279244072,13.37,..."undefined",...v7,9007199254740991);
const v18 = v9(9007199254740991,9007199254740991);
const v19 = [v6,Number,v9];
const v20 = v9(v2,v17,v9,v19);
}
%NeverOptimizeFunction(main);
main();
