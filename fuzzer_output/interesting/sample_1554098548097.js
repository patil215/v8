function main() {
const v2 = [13.37];
const v3 = [v2,13.37,this];
function v4(v5,v6,v7,v8) {
}
const v9 = v4 % v3;
}
%NeverOptimizeFunction(main);
main();
