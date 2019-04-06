function main() {
const v1 = [13.37];
for (let v6 = 0; v6 < 7; v6++) {
    const v7 = v6.__proto__;
    v1.__proto__ = v7;
}
const v8 = new Int32Array(v1);
}
%NeverOptimizeFunction(main);
main();
