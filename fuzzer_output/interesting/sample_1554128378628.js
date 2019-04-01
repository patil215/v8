function main() {
const v3 = [13.37,13.37];
const v4 = ["number",RegExp,v3];
const v6 = [1337,1337,1337];
const v8 = [13.37];
function v9(v10,v11,v12,v13) {
    v6.length = 1;
    v11[2] = v8;
}
const v16 = [1337];
const v17 = v9(v4,v6,1337);
const v21 = v9(3,0,v16);
}
%NeverOptimizeFunction(main);
main();
