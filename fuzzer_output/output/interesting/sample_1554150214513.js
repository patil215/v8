function main() {
const v3 = [9007199254740992];
function v4(v5,v6,v7,v8) {
    return arguments;
}
const v10 = Function[-869494906];
const v11 = v4(v3,v10,9007199254740992,Function);
const v13 = {reduce:v4};
const v15 = Object.defineProperty(v11,10,v13);
v11[2] = v3;
}
%NeverOptimizeFunction(main);
main();
