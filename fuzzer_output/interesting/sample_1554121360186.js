function main() {
const v1 = {hasOwnProperty:1337};
function v2(v3,v4,v5,v6) {
    const v9 = [13.37,13.37,13.37,v5];
    const v12 = v1.__proto__;
    v12[1337] = 13.37;
    for (let v14 = 0; v14 < 5; v14++) {
        v9[10] = v14;
    }
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v2(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
