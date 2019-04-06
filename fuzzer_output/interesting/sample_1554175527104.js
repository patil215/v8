function main() {
const v4 = [1337,1337,1337,1337];
const v5 = {concat:13.37,NaN:v4,isInteger:9007199254740992,assign:Set};
const v7 = [13.37,13.37];
function v8(v9,v10,v11,v12) {
}
const v14 = new Proxy(v7,v8);
v14.__proto__ = v5;
for (const v15 in v14) {
}
}
%NeverOptimizeFunction(main);
main();
