function main() {
const v2 = [13.37,13.37,1];
for (let v6 = 0; v6 < 100; v6++) {
    const v11 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
    const v12 = new Uint16Array(v11,-2.220446049250313e-16);
    const v13 = v12.fill(v6,v2,1337);
}
}
%NeverOptimizeFunction(main);
main();
