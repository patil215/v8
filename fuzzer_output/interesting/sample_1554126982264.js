function main() {
let v2 = "undefined";
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v6];
function v8(v9,v10,v11,v12) {
    'use strict'
    const v13 = v2[v12];
    return v13;
}
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v8(13.37,v4,13.37,1337,v7);
}
v2 = 1337;
}
%NeverOptimizeFunction(main);
main();
