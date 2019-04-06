function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
let v6 = 0;
const v7 = v6 + 1;
v6 = v7;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337];
function v12(v13,v14,v15,v16) {
}
const v18 = {apply:v12,deleteProperty:v12};
const v20 = new Proxy(v2,v18);
const v21 = {a:v9,find:v11,expm1:1337};
let v26 = 0;
const v27 = v26 + 1;
v26 = v27;
const v28 = v20.hasOwnProperty(0,-2866800045,13.37,1337,v21);
let v34 = 0;
const v35 = v34 + 1;
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
