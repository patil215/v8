function main() {
const v3 = [1337];
v3[1337] = 13.37;
for (let v7 = 0; v7 < 100; v7++) {
    const v9 = v3.unshift(3,v7);
}
}
%NeverOptimizeFunction(main);
main();
