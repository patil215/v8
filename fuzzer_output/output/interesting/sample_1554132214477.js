function main() {
function v3(v4,v5,v6,v7,v8) {
    for (let v12 = 0; v12 < 5; v12++) {
        arguments[10] = 5;
    }
}
const v15 = v3(1337,Math,9007199254740991,9007199254740991);
}
%NeverOptimizeFunction(main);
main();
