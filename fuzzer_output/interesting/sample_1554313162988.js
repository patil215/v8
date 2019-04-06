function main() {
const v6 = [13.37,13.37,1];
for (let v9 = 0; v9 < 100; v9 = v9 + 13.37) {
    const v13 = new Uint16Array(1024,-2.220446049250313e-16);
    const v14 = v13.fill(v9,v6,1337);
}
}
%NeverOptimizeFunction(main);
main();
