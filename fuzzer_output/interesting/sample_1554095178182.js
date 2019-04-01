function main() {
let v2 = 0;
while (v2 < 6) {
    let v5 = 0;
    let v8 = 0;
    const v9 = v2.__proto__;
    const v10 = v8 + 1;
    v8 = v10;
    const v11 = v5 + 1;
    v5 = v11;
    const v12 = v2 + 1;
    v2 = v12;
}
}
%NeverOptimizeFunction(main);
main();
