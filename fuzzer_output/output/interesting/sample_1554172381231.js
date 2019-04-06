function main() {
let v1 = 13.37;
let v8 = 0;
const v9 = v8 + 1;
v8 = v9;
const v10 = [1337,1337,1337,1337];
const v11 = {concat:13.37,NaN:v10,isInteger:9007199254740992,assign:Set};
const v13 = [13.37,13.37];
function v14(v15,v16,v17,v18) {
}
function v19(v20,v21,v22,v23) {
}
const v25 = new Proxy(v13,v14);
v25.__proto__ = v11;
const v27 = {set:v19};
const v29 = Object.hasOwnProperty(v25,-9007199254740993,v27);
}
%NeverOptimizeFunction(main);
main();
