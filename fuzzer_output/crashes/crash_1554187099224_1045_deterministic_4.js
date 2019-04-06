function main() {
function v1(v2,v3,v4,v5) {
    const v6 = v2.codePointAt(v4);
    const v7 = v6.__proto__;
}
const v8 = typeof String;
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v1(v8);
}
}
%NeverOptimizeFunction(main);
main();
