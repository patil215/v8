function main() {
const v8 = [1337];
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = undefined;
    const v16 = "undefined".__proto__;
    const v17 = [];
    v16[3040074401] = v17;
}
}
%NeverOptimizeFunction(main);
main();
