function main() {
const v2 = [13.37,13.37,1];
for (let v5 = 0; v5 < 100; v5 = v5 + 13.37) {
    const v10 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
    const v11 = new Uint16Array(v10,-2.220446049250313e-16);
    const v12 = v11.fill(v5,v2,1337);
}
}
%NeverOptimizeFunction(main);
main();
