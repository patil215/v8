function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v5 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
    const v9 = new Uint8Array(v5);
    for (let v11 = 0; v11 < 5; v11++) {
        v5[10] = v11;
    }
}
}
%NeverOptimizeFunction(main);
main();
