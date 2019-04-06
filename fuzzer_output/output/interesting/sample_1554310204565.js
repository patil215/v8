function main() {
for (let v4 = 0; v4 < 100; v4 = v4 + 13.37) {
    const v8 = new Uint16Array(1337,-2.220446049250313e-16);
    const v9 = v8.fill(v4,13.37,129);
}
}
%NeverOptimizeFunction(main);
main();
