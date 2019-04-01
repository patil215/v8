function main() {
const v1 = [1337,1337,1337,1337];
let v9 = 0;
const v11 = [1337];
const v12 = [v11];
let v17 = 0;
v17 = 10;
v1.valueOf = "number";
let v22 = "undefined";
function v26(v27,v28,v29,v30) {
}
let v37 = 0;
v37 = 10;
const v39 = [1337];
const v41 = {get:v26};
const v43 = Object.defineProperty(v39,"valueOf",v41);
}
%NeverOptimizeFunction(main);
main();
