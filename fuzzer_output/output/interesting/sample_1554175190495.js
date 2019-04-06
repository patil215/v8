function main() {
let v1 = 1337;
function v3(v4,v5) {
    v4.prototype = v1;
}
const v7 = [13.37,Object];
const v8 = v3(v3,v7,13.37);
}
%NeverOptimizeFunction(main);
main();
