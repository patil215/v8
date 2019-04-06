function main() {
const v1 = [-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0];
const v2 = {assign:v1,sqrt:-1000000000.0,atanh:v1};
const v4 = -Infinity;
const v5 = [v4,v2,v4,v4];
const v6 = -Infinity;
const v7 = [v5,v6,v6,v6,3.0];
function v9(v10,v11,v12,v13) {
}
const v14 = v7.toLocaleString(v9,v1,v4);
const v15 = v14.localeCompare(v1,128,v5,v5,v14);
}
%NeverOptimizeFunction(main);
main();
