function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    const v7 = [13.37];
    const v10 = "undefined" <= 10;
}
const v17 = {apply:v1};
const v19 = new Proxy(v1,v17);
const v20 = new v19(13.37,1);
}
%NeverOptimizeFunction(main);
main();
