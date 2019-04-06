function main() {
let v1 = 1337;
const v4 = [1337,parseInt];
function v5(v6,v7,v8,v9) {
    v4[v8] = v6;
}
const v10 = v5(v4,v5,1337,parseInt,v1);
const v12 = "of".localeCompare(v4,"of");
}
%NeverOptimizeFunction(main);
main();
